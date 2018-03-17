var fs = require('fs');
var _ = require('lodash');

fs.readFile('./bob.csv', 'utf8', readFileCallback)

function readFileCallback(err, data) {
	var arrayofStrings = splitNewLine(data);
	var arrayofArrays = mapSplitComma(arrayofStrings);
	var columnNames = _.head(arrayofArrays)
	var data = _.tail(arrayofArrays)
	var arrayofObjects = arraysToObject(columnNames,data)

	var bobsCommits = _.filter(arrayofObjects, function(row) {return row.name === 'bob'})
	var zachsCommits = _.filter(arrayofObjects, function(row) {return row.name === 'zach'})
	console.log("Zach has " + zachsCommits.length, "and Bob has " + bobsCommits.length);
}

function arraysToObject (columnNames, data) {
	_.map(data, function(row) {
		return _.zipObject(columnNames, row)
	})
}

function mapSplitComma (collection) {
	return _.map(collection, function(string) {
		return splitComma(string)
	})
}

function splitNewLine (string) {
	return _.split(string,'\n');
}

function splitComma (string) {
	return _.split(string,',')
}

// note: does not computer - some kind of error I missed 