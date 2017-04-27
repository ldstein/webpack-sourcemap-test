var fs     = require('fs');
var crypto = require('crypto');
var diff   = require('diff');

//..............................................................................
function checksum(str)
{
    return crypto
        .createHash('md5')
        .update(str, 'utf8')
        .digest('hex')
}
//..............................................................................

//..............................................................................
function checksumsMatch(file1, file2)
{
    var fileData1 = checksum(fs.readFileSync(file1, 'utf8'));
    var fileData2 = checksum(fs.readFileSync(file2, 'utf8'));

    return (fileData1 == fileData2);
}
//..............................................................................

//..............................................................................
function diffFiles(file1, file2)
{
    var fileData1 = fs.readFileSync(file1, 'utf8');
    var fileData2 = fs.readFileSync(file2, 'utf8');

    return diff.diffChars(fileData1, fileData2);
}
//..............................................................................

var col              = 0;
var sourceMapDiffLog = [];

var bundleFilesSame = checksumsMatch('./build-bad/index.build.js'    , './build-good/index.build.js'    );
var sourceMapSame   = checksumsMatch('./build-bad/index.build.js.map', './build-good/index.build.js.map');
var sourceMapDiff   = diffFiles     ('./build-bad/index.build.js.map', './build-good/index.build.js.map');

sourceMapDiff.forEach(function(entry)
{
    col += entry.count;

    if (entry.removed)
    {
        sourceMapDiffLog.push(`@Col ${col-entry.count} Removed: ${entry.value}`);
        col -= (entry.count + entry.value.length);
    }
    else
    if (entry.added)
    {
        sourceMapDiffLog.push(`@Col ${col-entry.count} Added: ${entry.value}`);
    }

});


console.log('---------------------------------');
console.log('Bundle JS checksums match:', bundleFilesSame);
console.log('Sourcemap checksums match:', sourceMapSame  );
console.log('---------------------------------');
console.log('SourceMap differences:');
console.log(sourceMapDiffLog.length == 0 ? 'No differences!' : sourceMapDiffLog.join('\n'));

