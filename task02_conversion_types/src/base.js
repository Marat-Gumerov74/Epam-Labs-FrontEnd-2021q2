export let base = {
'true == true': true,
'true == false': false,
'true == 1': false,
'true == 0': false,
'true == -1': false,
'true == "true"': false,
'true == "false"': false,
'true == "1"': true,
'true == "0"': false,
'true == "-1"': false,
'true == ""': false,
'true == null': false,
'true == undefined': false,
'true == Infinity': false,
'true == -Infinity': false,
'true == []': false,
'true == {}': false,
'true == [[]]': false,
'true == [0]': false,
'true == [1]': true,
'true == NaN': false,
'false == true': false,
'false == false': true,
'false == 1': false,
'false == 0': true,
'false == -1': false,
'false == "true"': false,
'false == "false"': false,
'false == "1"': false,
'false == "0"': true,
'false == "-1"': false,
'false == ""': true,
'false == null': false,
'false == undefined': false,
'false == Infinity': false,
'false == -Infinity': false,
'false == []': true,
'false == {}': false,
'false == [[]]': true,
'false == [0]': true,
'false == [1]': false,
'false == NaN': false,
'1 == true': true,
'1 == false': false,
'1 == 1': true,
'1 == 0': false,
'1 == -1': false,
'1 == "true"': false,
'1 == "false"': false,
'1 == "1"': true,
'1 == "0"': false,
'1 == "-1"': false,
'1 == ""': false,
'1 == null': false,
'1 == undefined': false,
'1 == Infinity': false,
'1 == -Infinity': false,
'1 == []': false,
'1 == {}': false,
'1 == [[]]': false,
'1 == [0]': false,
'1 == [1]': true,
'1 == NaN': false,
'0 == true': false,
'0 == false': true,
'0 == 1': false,
'0 == 0': true,
'0 == -1': false,
'0 == "true"': false,
'0 == "false"': false,
'0 == "1"': false,
'0 == "0"': true,
'0 == "-1"': false,
'0 == ""': true,
'0 == null': false,
'0 == undefined': false,
'0 == Infinity': false,
'0 == -Infinity': false,
'0 == []': true,
'0 == {}': false,
'0 == [[]]': true,
'0 == [0]': true,
'0 == [1]': false,
'0 == NaN': false,
'-1 == true': false,
'-1 == false': false,
'-1 == 1': false,
'-1 == 0': false,
'-1 == -1': true,
'-1 == "true"': false,
'-1 == "false"': false,
'-1 == "1"': false,
'-1 == "0"': false,
'-1 == "-1"': true,
'-1 == ""': false,
'-1 == null': false,
'-1 == undefined': false,
'-1 == Infinity': false,
'-1 == -Infinity': false,
'-1 == []': false,
'-1 == {}': false,
'-1 == [[]]': false,
'-1 == [0]': false,
'-1 == [1]': false,
'-1 == NaN': false,
'"true" == true': false,
'"true" == false': false,
'"true" == 1': false,
'"true" == 0': false,
'"true" == -1': false,
'"true" == "true"': true,
'"true" == "false"': false,
'"true" == "1"': false,
'"true" == "0"': false,
'"true" == "-1"': false,
'"true" == ""': false,
'"true" == null': false,
'"true" == undefined': false,
'"true" == Infinity': false,
'"true" == -Infinity': false,
'"true" == []': false,
'"true" == {}': false,
'"true" == [[]]': false,
'"true" == [0]': false,
'"true" == [1]': false,
'"true" == NaN': false,
'"false" == true': false,
'"false" == false': false,
'"false" == 1': false,
'"false" == 0': false,
'"false" == -1': false,
'"false" == "true"': false,
'"false" == "false"': true,
'"false" == "1"': false,
'"false" == "0"': false,
'"false" == "-1"': false,
'"false" == ""': false,
'"false" == null': false,
'"false" == undefined': false,
'"false" == Infinity': false,
'"false" == -Infinity': false,
'"false" == []': false,
'"false" == {}': false,
'"false" == [[]]': false,
'"false" == [0]': false,
'"false" == [1]': false,
'"false" == NaN': false,
'"1" == true': true,
'"1" == false': false,
'"1" == 1': true,
'"1" == 0': false,
'"1" == -1': false,
'"1" == "true"': false,
'"1" == "false"': false,
'"1" == "1"': true,
'"1" == "0"': false,
'"1" == "-1"': false,
'"1" == ""': false,
'"1" == null': false,
'"1" == undefined': false,
'"1" == Infinity': false,
'"1" == -Infinity': false,
'"1" == []': false,
'"1" == {}': false,
'"1" == [[]]': false,
'"1" == [0]': false,
'"1" == [1]': true,
'"1" == NaN': false,
'"0" == true': false,
'"0" == false': true,
'"0" == 1': false,
'"0" == 0': true,
'"0" == -1': false,
'"0" == "true"': false,
'"0" == "false"': false,
'"0" == "1"': false,
'"0" == "0"': true,
'"0" == "-1"': false,
'"0" == ""': false,
'"0" == null': false,
'"0" == undefined': false,
'"0" == Infinity': false,
'"0" == -Infinity': false,
'"0" == []': false,
'"0" == {}': false,
'"0" == [[]]': false,
'"0" == [0]': true,
'"0" == [1]': false,
'"0" == NaN': false,
'"-1" == true': false,
'"-1" == false': false,
'"-1" == 1': false,
'"-1" == 0': false,
'"-1" == -1': true,
'"-1" == "true"': false,
'"-1" == "false"': false,
'"-1" == "1"': false,
'"-1" == "0"': false,
'"-1" == "-1"': true,
'"-1" == ""': false,
'"-1" == null': false,
'"-1" == undefined': false,
'"-1" == Infinity': false,
'"-1" == -Infinity': false,
'"-1" == []': false,
'"-1" == {}': false,
'"-1" == [[]]': false,
'"-1" == [0]': false,
'"-1" == [1]': false,
'"-1" == NaN': false,
'"" == true': false,
'"" == false': true,
'"" == 1': false,
'"" == 0': true,
'"" == -1': false,
'"" == "true"': false,
'"" == "false"': false,
'"" == "1"': false,
'"" == "0"': false,
'"" == "-1"': false,
'"" == ""': true,
'"" == null': false,
'"" == undefined': false,
'"" == Infinity': false,
'"" == -Infinity': false,
'"" == []': true,
'"" == {}': false,
'"" == [[]]': true,
'"" == [0]': false,
'"" == [1]': false,
'"" == NaN': false,
'null == true': false,
'null == false': false,
'null == 1': false,
'null == 0': false,
'null == -1': false,
'null == "true"': false,
'null == "false"': false,
'null == "1"': false,
'null == "0"': false,
'null == "-1"': false,
'null == ""': false,
'null == null': true,
'null == undefined': true,
'null == Infinity': false,
'null == -Infinity': false,
'null == []': false,
'null == {}': false,
'null == [[]]': false,
'null == [0]': false,
'null == [1]': false,
'null == NaN': false,
'undefined == true': false,
'undefined == false': false,
'undefined == 1': false,
'undefined == 0': false,
'undefined == -1': false,
'undefined == "true"': false,
'undefined == "false"': false,
'undefined == "1"': false,
'undefined == "0"': false,
'undefined == "-1"': false,
'undefined == ""': false,
'undefined == null': true,
'undefined == undefined': true,
'undefined == Infinity': false,
'undefined == -Infinity': false,
'undefined == []': false,
'undefined == {}': false,
'undefined == [[]]': false,
'undefined == [0]': false,
'undefined == [1]': false,
'undefined == NaN': false,
'Infinity == true': false,
'Infinity == false': false,
'Infinity == 1': false,
'Infinity == 0': false,
'Infinity == -1': false,
'Infinity == "true"': false,
'Infinity == "false"': false,
'Infinity == "1"': false,
'Infinity == "0"': false,
'Infinity == "-1"': false,
'Infinity == ""': false,
'Infinity == null': false,
'Infinity == undefined': false,
'Infinity == Infinity': true,
'Infinity == -Infinity': false,
'Infinity == []': false,
'Infinity == {}': false,
'Infinity == [[]]': false,
'Infinity == [0]': false,
'Infinity == [1]': false,
'Infinity == NaN': false,
'-Infinity == true': false,
'-Infinity == false': false,
'-Infinity == 1': false,
'-Infinity == 0': false,
'-Infinity == -1': false,
'-Infinity == "true"': false,
'-Infinity == "false"': false,
'-Infinity == "1"': false,
'-Infinity == "0"': false,
'-Infinity == "-1"': false,
'-Infinity == ""': false,
'-Infinity == null': false,
'-Infinity == undefined': false,
'-Infinity == Infinity': false,
'-Infinity == -Infinity': true,
'-Infinity == []': false,
'-Infinity == {}': false,
'-Infinity == [[]]': false,
'-Infinity == [0]': false,
'-Infinity == [1]': false,
'-Infinity == NaN': false,
'[] == true': false,
'[] == false': true,
'[] == 1': false,
'[] == 0': true,
'[] == -1': false,
'[] == "true"': false,
'[] == "false"': false,
'[] == "1"': false,
'[] == "0"': false,
'[] == "-1"': false,
'[] == ""': true,
'[] == null': false,
'[] == undefined': false,
'[] == Infinity': false,
'[] == -Infinity': false,
'[] == []': false,
'[] == {}': false,
'[] == [[]]': false,
'[] == [0]': false,
'[] == [1]': false,
'[] == NaN': false,
'{} == true': false,
'{} == false': false,
'{} == 1': false,
'{} == 0': false,
'{} == -1': false,
'{} == "true"': false,
'{} == "false"': false,
'{} == "1"': false,
'{} == "0"': false,
'{} == "-1"': false,
'{} == ""': false,
'{} == null': false,
'{} == undefined': false,
'{} == Infinity': false,
'{} == -Infinity': false,
'{} == []': false,
'{} == {}': false,
'{} == [[]]': false,
'{} == [0]': false,
'{} == [1]': false,
'{} == NaN': false,
'[[]] == true': false,
'[[]] == false': true,
'[[]] == 1': false,
'[[]] == 0': true,
'[[]] == -1': false,
'[[]] == "true"': false,
'[[]] == "false"': false,
'[[]] == "1"': false,
'[[]] == "0"': false,
'[[]] == "-1"': false,
'[[]] == ""': true,
'[[]] == null': false,
'[[]] == undefined': false,
'[[]] == Infinity': false,
'[[]] == -Infinity': false,
'[[]] == []': false,
'[[]] == {}': false,
'[[]] == [[]]': false,
'[[]] == [0]': false,
'[[]] == [1]': false,
'[[]] == NaN': false,
'[0] == true': false,
'[0] == false': true,
'[0] == 1': false,
'[0] == 0': true,
'[0] == -1': false,
'[0] == "true"': false,
'[0] == "false"': false,
'[0] == "1"': false,
'[0] == "0"': true,
'[0] == "-1"': false,
'[0] == ""': false,
'[0] == null': false,
'[0] == undefined': false,
'[0] == Infinity': false,
'[0] == -Infinity': false,
'[0] == []': false,
'[0] == {}': false,
'[0] == [[]]': false,
'[0] == [0]': false,
'[0] == [1]': false,
'[0] == NaN': false,
'[1] == true': true,
'[1] == false': false,
'[1] == 1': true,
'[1] == 0': false,
'[1] == -1': false,
'[1] == "true"': false,
'[1] == "false"': false,
'[1] == "1"': true,
'[1] == "0"': false,
'[1] == "-1"': false,
'[1] == ""': false,
'[1] == null': false,
'[1] == undefined': false,
'[1] == Infinity': false,
'[1] == -Infinity': false,
'[1] == []': false,
'[1] == {}': false,
'[1] == [[]]': false,
'[1] == [0]': false,
'[1] == [1]': false,
'[1] == NaN': false,
'NaN == true': false,
'NaN == false': false,
'NaN == 1': false,
'NaN == 0': false,
'NaN == -1': false,
'NaN == "true"': false,
'NaN == "false"': false,
'NaN == "1"': false,
'NaN == "0"': false,
'NaN == "-1"': false,
'NaN == ""': false,
'NaN == null': false,
'NaN == undefined': false,
'NaN == Infinity': false,
'NaN == -Infinity': false,
'NaN == []': false,
'NaN == {}': false,
'NaN == [[]]': false,
'NaN == [0]': false,
'NaN == [1]': false,
'NaN == NaN': false,

 'true === true' : true,
 'true === false' : false,
 'true === 1' : false,
 'true === 0' : false,
 'true === -1' : false,
 'true === "true"' : false,
 'true === "false"' : false,
 'true === "1"': false,
 'true === "0"' : false,
 'true === "-1"' : false,
 'true === ""' : false,
 'true === null': false,
 'true === undefined' : false,
 'true === Infinity' : false,
 'true === -Infinity' : false,
 'true === []' : false,
 'true === {}' : false,
 'true === [[]]' : false,
 'true === [0]' : false,
 'true === [1]': false,
 'true === NaN' : false,
'false === true': false,
'false === false': true,
'false === 1': false,
'false === 0': false,
'false === -1': false,
'false === "true"': false,
'false === "false"': false,
'false === "1"': false,
'false === "0"': false,
'false === "-1"': false,
'false === ""': false,
'false === null': false,
'false === undefined': false,
'false === Infinity': false,
'false === -Infinity': false,
'false === []': false,
'false === {}': false,
'false === [[]]': false,
'false === [0]': false,
'false === [1]': false,
'false === NaN': false,
'1 === true': false,
'1 === false': false,
'1 === 1': true,
'1 === 0': false,
'1 === -1': false,
'1 === "true"': false,
'1 === "false"': false,
'1 === "1"': false,
'1 === "0"': false,
'1 === "-1"': false,
'1 === ""': false,
'1 === null': false,
'1 === undefined': false,
'1 === Infinity': false,
'1 === -Infinity': false,
'1 === []': false,
'1 === {}': false,
'1 === [[]]': false,
'1 === [0]': false,
'1 === [1]': false,
'1 === NaN': false,
'0 === true': false,
'0 === false': false,
'0 === 1': false,
'0 === 0': true,
'0 === -1': false,
'0 === "true"': false,
'0 === "false"': false,
'0 === "1"': false,
'0 === "0"': false,
'0 === "-1"': false,
'0 === ""': false,
'0 === null': false,
'0 === undefined': false,
'0 === Infinity': false,
'0 === -Infinity': false,
'0 === []': false,
'0 === {}': false,
'0 === [[]]': false,
'0 === [0]': false,
'0 === [1]': false,
'0 === NaN': false,
'-1 === true': false,
'-1 === false': false,
'-1 === 1': false,
'-1 === 0': false,
'-1 === -1': true,
'-1 === "true"': false,
'-1 === "false"': false,
'-1 === "1"': false,
'-1 === "0"': false,
'-1 === "-1"': false,
'-1 === ""': false,
'-1 === null': false,
'-1 === undefined': false,
'-1 === Infinity': false,
'-1 === -Infinity': false,
'-1 === []': false,
'-1 === {}': false,
'-1 === [[]]': false,
'-1 === [0]': false,
'-1 === [1]': false,
'-1 === NaN': false,
'"true" === true': false,
'"true" === false': false,
'"true" === 1': false,
'"true" === 0': false,
'"true" === -1': false,
'"true" === "true"': true,
'"true" === "false"': false,
'"true" === "1"': false,
'"true" === "0"': false,
'"true" === "-1"': false,
'"true" === ""': false,
'"true" === null': false,
'"true" === undefined': false,
'"true" === Infinity': false,
'"true" === -Infinity': false,
'"true" === []': false,
'"true" === {}': false,
'"true" === [[]]': false,
'"true" === [0]': false,
'"true" === [1]': false,
'"true" === NaN': false,
'"false" === true': false,
'"false" === false': false,
'"false" === 1': false,
'"false" === 0': false,
'"false" === -1': false,
'"false" === "true"': false,
'"false" === "false"': true,
'"false" === "1"': false,
'"false" === "0"': false,
'"false" === "-1"': false,
'"false" === ""': false,
'"false" === null': false,
'"false" === undefined': false,
'"false" === Infinity': false,
'"false" === -Infinity': false,
'"false" === []': false,
'"false" === {}': false,
'"false" === [[]]': false,
'"false" === [0]': false,
'"false" === [1]': false,
'"false" === NaN': false,
'"1" === true': true,
'"1" === false': false,
'"1" === 1': false,
'"1" === 0': false,
'"1" === -1': false,
'"1" === "true"': false,
'"1" === "false"': false,
'"1" === "1"': false,
'"1" === "0"': false,
'"1" === "-1"': false,
'"1" === ""': false,
'"1" === null': false,
'"1" === undefined': false,
'"1" === Infinity': false,
'"1" === -Infinity': false,
'"1" === []': false,
'"1" === {}': false,
'"1" === [[]]': false,
'"1" === [0]': false,
'"1" === [1]': false,
'"1" === NaN': false,
'"0" === true': false,
'"0" === false': false,
'"0" === 1': false,
'"0" === 0': false,
'"0" === -1': false,
'"0" === "true"': false,
'"0" === "false"': false,
'"0" === "1"': false,
'"0" === "0"': true,
'"0" === "-1"': false,
'"0" === ""': false,
'"0" === null': false,
'"0" === undefined': false,
'"0" === Infinity': false,
'"0" === -Infinity': false,
'"0" === []': false,
'"0" === {}': false,
'"0" === [[]]': false,
'"0" === [0]': false,
'"0" === [1]': false,
'"0" === NaN': false,
'"-1" === true': false,
'"-1" === false': false,
'"-1" === 1': false,
'"-1" === 0': false,
'"-1" === -1': true,
'"-1" === "true"': false,
'"-1" === "false"': false,
'"-1" === "1"': false,
'"-1" === "0"': false,
'"-1" === "-1"': false,
'"-1" === ""': false,
'"-1" === null': false,
'"-1" === undefined': false,
'"-1" === Infinity': false,
'"-1" === -Infinity': false,
'"-1" === []': false,
'"-1" === {}': false,
'"-1" === [[]]': false,
'"-1" === [0]': false,
'"-1" === [1]': false,
'"-1" === NaN': false,
'"" === true': false,
'"" === false': false,
'"" === 1': false,
'"" === 0': false,
'"" === -1': false,
'"" === "true"': false,
'"" === "false"': false,
'"" === "1"': false,
'"" === "0"': false,
'"" === "-1"': false,
'"" === ""': true,
'"" === null': false,
'"" === undefined': false,
'"" === Infinity': false,
'"" === -Infinity': false,
'"" === []': false,
'"" === {}': false,
'"" === [[]]': false,
'"" === [0]': false,
'"" === [1]': false,
'"" === NaN': false,
'null === true': false,
'null === false': false,
'null === 1': false,
'null === 0': false,
'null === -1': false,
'null === "true"': false,
'null === "false"': false,
'null === "1"': false,
'null === "0"': false,
'null === "-1"': false,
'null === ""': false,
'null === null': true,
'null === undefined': false,
'null === Infinity': false,
'null === -Infinity': false,
'null === []': false,
'null === {}': false,
'null === [[]]': false,
'null === [0]': false,
'null === [1]': false,
'null === NaN': false,
'undefined === true': false,
'undefined === false': false,
'undefined === 1': false,
'undefined === 0': false,
'undefined === -1': false,
'undefined === "true"': false,
'undefined === "false"': false,
'undefined === "1"': false,
'undefined === "0"': false,
'undefined === "-1"': false,
'undefined === ""': false,
'undefined === null': false,
'undefined === undefined': true,
'undefined === Infinity': false,
'undefined === -Infinity': false,
'undefined === []': false,
'undefined === {}': false,
'undefined === [[]]': false,
'undefined === [0]': false,
'undefined === [1]': false,
'undefined === NaN': false,
'Infinity === true': false,
'Infinity === false': false,
'Infinity === 1': false,
'Infinity === 0': false,
'Infinity === -1': false,
'Infinity === "true"': false,
'Infinity === "false"': false,
'Infinity === "1"': false,
'Infinity === "0"': false,
'Infinity === "-1"': false,
'Infinity === ""': false,
'Infinity === null': false,
'Infinity === undefined': false,
'Infinity === Infinity': true,
'Infinity === -Infinity': false,
'Infinity === []': false,
'Infinity === {}': false,
'Infinity === [[]]': false,
'Infinity === [0]': false,
'Infinity === [1]': false,
'Infinity === NaN': false,
'-Infinity === true': false,
'-Infinity === false': false,
'-Infinity === 1': false,
'-Infinity === 0': false,
'-Infinity === -1': false,
'-Infinity === "true"': false,
'-Infinity === "false"': false,
'-Infinity === "1"': false,
'-Infinity === "0"': false,
'-Infinity === "-1"': false,
'-Infinity === ""': false,
'-Infinity === null': false,
'-Infinity === undefined': false,
'-Infinity === Infinity': false,
'-Infinity === -Infinity': true,
'-Infinity === []': false,
'-Infinity === {}': false,
'-Infinity === [[]]': false,
'-Infinity === [0]': false,
'-Infinity === [1]': false,
'-Infinity === NaN': false,
'[] === true': false,
'[] === false': false,
'[] === 1': false,
'[] === 0': true,
'[] === -1': false,
'[] === "true"': false,
'[] === "false"': false,
'[] === "1"': false,
'[] === "0"': false,
'[] === "-1"': false,
'[] === ""': false,
'[] === null': false,
'[] === undefined': false,
'[] === Infinity': false,
'[] === -Infinity': false,
'[] === []': false,
'[] === {}': false,
'[] === [[]]': false,
'[] === [0]': false,
'[] === [1]': false,
'[] === NaN': false,
'{} === true': false,
'{} === false': false,
'{} === 1': false,
'{} === 0': false,
'{} === -1': false,
'{} === "true"': false,
'{} === "false"': false,
'{} === "1"': false,
'{} === "0"': false,
'{} === "-1"': false,
'{} === ""': false,
'{} === null': false,
'{} === undefined': false,
'{} === Infinity': false,
'{} === -Infinity': false,
'{} === []': false,
'{} === {}': false,
'{} === [[]]': false,
'{} === [0]': false,
'{} === [1]': false,
'{} === NaN': false,
'[[]] === true': false,
'[[]] === false': false,
'[[]] === 1': false,
'[[]] === 0': true,
'[[]] === -1': false,
'[[]] === "true"': false,
'[[]] === "false"': false,
'[[]] === "1"': false,
'[[]] === "0"': false,
'[[]] === "-1"': false,
'[[]] === ""': false,
'[[]] === null': false,
'[[]] === undefined': false,
'[[]] === Infinity': false,
'[[]] === -Infinity': false,
'[[]] === []': false,
'[[]] === {}': false,
'[[]] === [[]]': false,
'[[]] === [0]': false,
'[[]] === [1]': false,
'[[]] === NaN': false,
'[0] === true': false,
'[0] === false': false,
'[0] === 1': false,
'[0] === 0': true,
'[0] === -1': false,
'[0] === "true"': false,
'[0] === "false"': false,
'[0] === "1"': false,
'[0] === "0"': true,
'[0] === "-1"': false,
'[0] === ""': false,
'[0] === null': false,
'[0] === undefined': false,
'[0] === Infinity': false,
'[0] === -Infinity': false,
'[0] === []': false,
'[0] === {}': false,
'[0] === [[]]': false,
'[0] === [0]': false,
'[0] === [1]': false,
'[0] === NaN': false,
'[1] === true': false,
'[1] === false': false,
'[1] === 1': false,
'[1] === 0': false,
'[1] === -1': false,
'[1] === "true"': false,
'[1] === "false"': false,
'[1] === "1"': false,
'[1] === "0"': false,
'[1] === "-1"': false,
'[1] === ""': false,
'[1] === null': false,
'[1] === undefined': false,
'[1] === Infinity': false,
'[1] === -Infinity': false,
'[1] === []': false,
'[1] === {}': false,
'[1] === [[]]': false,
'[1] === [0]': false,
'[1] === [1]': false,
'[1] === NaN': false,
'NaN === true': false,
'NaN === false': false,
'NaN === 1': false,
'NaN === 0': false,
'NaN === -1': false,
'NaN === "true"': false,
'NaN === "false"': false,
'NaN === "1"': false,
'NaN === "0"': false,
'NaN === "-1"': false,
'NaN === ""': false,
'NaN === null': false,
'NaN === undefined': false,
'NaN === Infinity': false,
'NaN === -Infinity': false,
'NaN === []': false,
'NaN === {}': false,
'NaN === [[]]': false,
'NaN === [0]': false,
'NaN === [1]': false,
'NaN === NaN': false,
'if (true)': "executes",
'if (false)': "does not execute",
'if (1)': "executes",
'if (0)': "does not execute",
'if (-1)': "executes",
'if ("true")': "executes",
'if ("false")': "executes",
'if ("1")': "executes",
'if ("0")': "executes",
'if ("-1")': "executes",
'if ("")': "does not execute",
'if (null)': "does not execute",
'if (undefined)': "does not execute",
'if (Infinity)': "executes",
'if (-Infinity)': "executes",
'if ([])': "executes",
'if ({})': "executes",
'if [[]])': "executes",
'if ([0])': "executes",
'if [1])': "executes",
'if (NaN)': "does not execute",
}