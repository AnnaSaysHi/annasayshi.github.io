
function generateVarTable(game) {
	let normalized = normalizeGameVersion(game);

	let head = `Current table: [game=${normalized}]version ${game}[/game][br]`;

	let table = "";
	table += "<table>";
	table += "<tr><th>ID</th><th>type</th><th>access</th><th>scoping</th><th>name</th><th>description</th></tr>";

	const limit = getVarLimits(normalized);

	let total = 0;
	for (let i=limit[0]; i<=limit[1]; i++) {
		const v = getVarNoCheck(normalized, i);
		if (v) {
			++total;
		}
		table += getVarTableRow(v);
	}
	table += "</table>";

	return MD.makeHtml(head) + MD.makeHtml(table);
}

function getVarTableRow(v) {
	if (v == null) return "";
	let idString = v.number + (v.type == "$" ? "" : ".0f");
	let typeString = v.type == "$" ? "int" : "float";
	let accessString = v.access == "rw" ? "read/write" : "read-only";
	let scopeString = v.scope == "g" ? "global" : "local";
	return `<tr><td>${idString}</td><td>${typeString}</td><td>${accessString}</td><td>${scopeString}</td><td>${getVarName(v.number, v.documented)}</td><td>${v.desc}</td></tr>`;
}

function getVarLimits(game) {
	game = normalizeGameVersion(game);
	switch(game) {
		case "1_1_0": return VARLIMIT_1_1_0;
	}
}

function getVar(game, id) {
	let lim = getVarLimits(game);
	if (lim[0] <= id && lim[1] >= id) 
		return getVarNoCheck(game, id);
	return null;
	/*const variable = VARS[id];
	if (typeof variable == "undefined")
		return null;
	if (variable == null) 
		return [-1,	"$", "ro", "g", "Unkown variable."];
	return variable;*/
}

function getVarNoCheck(game, id) {
	let ret = null;
	switch(game) {
		case "1_1_0":
			if (!ret) ret = getVarFromList(VAR_1_1_0, id);
			break;
	}
	return ret;
}

function getVarFromList(list, id) {
	const ret = list[id];
	if (typeof ret == "undefined") return null;
	return ret;
}

function getVarName(v) {
	return v.name;
}

function getVarTip(v) {
	if (v == null) return "";
	let idString = v.number + (v.type == "$" ? "" : ".0f");
	let typeString = v.type == "$" ? "int" : "float";
	let accessString = v.access == "rw" ? "read/write" : "read-only";
	let scopeString = v.scope == "g" ? "global" : "local";
	let tip = `**${idString} - ${getVarName(v)}** - ${scopeString}, ${accessString}, ${typeString} variable[br][hr]${v.desc}`;
	return MD.makeHtml(tip.replace(/\[var=/g, "[var_notip="));
}

function normalizeGameVersion(num) {
	switch(num){
        case 110: return "1_1_0";
		case "110": return "1_1_0";
		case "1.1.0": return "1_1_0";
		case "\"1_1_0\"": return "1_1_0";
    }
	return num;
}

function getGroups(game) {
	switch(game) {
        case "1_1_0":
			 return GROUPS_1_1_0;
	}
}

function getOpcodeFromList(list, num) {
	let ret = list[num];
	if (typeof ret == "undefined") return null;
	if (ret == null)
		return {
			number: -1,
            name: "",
			version: "",
			args: "",
			argnames: [],
			desc: "",
			documented: false
		};
	return ret;
}

function getOpcodeNoCheck(game, num, timeline) {
	let ret = null;
	if (!timeline) {
		switch(game) {
			// Inherits ins from previous versions.
			case "1_1_0":
				ret = getOpcodeFromList(INS_1_1_0, num);
				if (ret) {
					if (ret.noInherit && ret.game != game)
						ret = null;
					else
						break;
				}
				break;
			case 8:
				if (!ret) ret = getOpcodeFromList(INS_8, num);
		}
	} else {
		switch(game) {
			case 8:
				if (!ret) ret = getOpcodeFromList(TIMELINE_INS_8, num)
		}
	}
	return ret;
}

function getOpcode(game, num, timeline) {
	game = normalizeGameVersion(game);
	const groups = getGroups(game);
    num = opcodeNameToNumber(num);
	// check if the given opcode name exists in the given version.
	let exists = false;
	for (let i=0; i<groups.length; ++i) {
		const group = groups[i];
		if (!!timeline != !!group.timeline)
			continue;

		if (group.min <= num && group.max >= num) {
			exists = true;
			break;
		}
	}

	if (exists) return getOpcodeNoCheck(game, num, timeline);

	return null;
}

function generateOpcodeTable(game) {
	const normalized = normalizeGameVersion(game);
	let base = `Selected version: 1.1.0[br]`;

	let navigation = "<div class='ins-navigation'><h3>Navigation</h3>";
	let table = "";

	let total = 0;
	let documented = 0;
	const groups = getGroups(normalized);
	for (let i=0; i<groups.length; ++i) {
		const group = groups[i];

		navigation += `- <span class='ins-navigation-entry' data-target='${group.title}'>${group.title}</span><br>`

		table += `<br><h2 data-insnavigation="${group.title}"> ${group.title}</h2>`;
		table += "<table class='ins-table'>";

		for (let num=group.min; num<=group.max; ++num) {
			const ins = getOpcodeNoCheck(normalized, num, group.timeline);
			let instrDocumented = ins != null && ins.documented;
			let instrNoDesc = ins != null && ins.number != -1;
			let instrExists = instrDocumented || instrNoDesc || ins == null
			if (instrDocumented) documented += 1;
			if (instrExists) {
				total += 1;
				table += generateOpcodeTableEntry(ins);
			}
		}

		table += "</table>";
	}
	navigation += "</div>";
	return MD.makeHtml(base) + navigation + table;
}

function generateOpcodeTableEntry(ins) {
	return `
<tr>
	<td class="ins-signature">
		<span class="ins-name">${getOpcodeShortName(ins)}</span><wbr><span class="ins-params">${generateOpcodeParameters(ins)}</span>
	<td class="ins-desc">${generateOpcodeDesc(ins)}</td>
</tr>
`;
}

function getOpcodeName(ins) {
	return ins.package + "." + ins.name;
}
function getOpcodeShortName(ins){
	return ins.name;
}

function generateOpcodeParameters(ins) {
	if (ins == null) return "";

	let ret = "";
	for (let i=0; i<ins.args.length; ++i) {
		if (i != 0) ret += ", ";
		ret += `<span style="white-space: nowrap;"><span class="ins-arg-type">${ARGTYPES[ins.args[i]]}</span> ${ins.argnames[i]}</span>`;
	}
	return ret;
}

function generateOpcodeDesc(ins, notip=false) {
	if (ins == null) return "<span style='color:gray'>No description available.</span>";

	let ret = ins.description;
	for (let i=0; i<ins.args.length; i++) {
		ret = ret.replace(new RegExp("%"+(i+1)+"(?=[^0-9])", "g"), "[tip=Parameter "+(i+1)+", "+ARGTYPES[ins.args[i]]+"]`"+ins.argnames[i]+"`[/tip]");
	}
	if (notip) 
		ret = ret.replace(/\[ins=/g, "[ins_notip=");
	return MD.makeHtml(ret);
}

function getOpcodeTip(ins, timeline) {
	return escapeTip(
/* NOTE: his string must abolutely NOT have any newlines in it */
`<br><b>${getOpcodeName(ins)}(${generateOpcodeParameters(ins)})</b><br><hr>${generateOpcodeDesc(ins, true)}`
	);
}

function escapeTip(tip) {
	return tip.replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/_/g, "_").replace(/</g, "&lt;").replace(/>/g, "&gt;");//.replace(/\[ins=/g, "[ins_notip=");
}
