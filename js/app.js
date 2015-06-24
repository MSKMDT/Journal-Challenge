// TESTING CODE
var myJournal = new Journal();
myJournal.addEntry("My Coding Life", "Everything is great!", "Cherie", ["Friday", "Boring"]);
myJournal.addEntry("Shit Just Got Real", "What happened? Everything is terrible", "Kush", ["Monday", "Boring"]);
myJournal.addEntry("Think About It", "Real Eyes Realize Real Lies", "Jon", ["Deep", "Eyes", "Swag"]);
myJournal.addEntry("Huh?", "Who gave my journal to Jaden?", "Ben", ["Confused"]);

function writeNumEntriesOnPage() {
	$("#entryCount").html(myJournal.entries.length+" Entries");
}

function writeEntriesToPage(journal){
	
	$("#content").append(journal.toHTML());
}

writeNumEntriesOnPage(myJournal);
writeEntriesToPage(myJournal);

// $('.addEntryForm').submit(function)(event){
// 	event.preventDefault();

// 	var formData = $(addEntryForm).serializeFormToObject();
// 	console.log(formData);
	// console.log(title);
	// console.log(author);
	// console.log(content);

