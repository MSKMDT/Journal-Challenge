function Journal()
{
	this.entries = [];

	// adds an Entry with the given info
	this.addEntry = function addIt(title, content, author, tags) {
		// create the Entry object
		var entry = new Entry(title, content, author, tags);
		// add it to the array
		this.entries.push(entry);
	}

	// Displays an Entry object
	this.displayEntry = function showEntry(entry) {
		console.log("------------------------------");
		console.log("\t" + entry.title + "\n");
		console.log("\t" + "By: " + entry.author);
		console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
		console.log(entry.content);	

		// log the tags
		for (var i = 0; i < entry.tags.length; i++) {
			console.log("#" + entry.tags[i] + " ");		
		}
		console.log("------------------------------");
	}

	this.toHTML = function() {
		var htmlString = "";
		for (var i=0; i< this.entries.length; i++)
		{
			htmlString+= this.entries[i].toHTML();
		}
		return htmlString;
	}

	// Displays an array of Entry objects
	this.displayEntries = function showEntries(entryArray) {
		for (var i = 0; i < entryArray.length; i++) {	
			this.displayEntry(entryArray[i]); // display the entry
			console.log(); // adds a new line
		}
	}

	// Displays all entries in the Journal
	this.displayAllEntries = function showAllEntries() {
		this.displayEntries(this.entries);
	}

	// Finds all Entry objects with the given tag, and returns them in an array
	this.findAllEntriesWithTag = function searchForTag(tag)	{

		var foundEntries = [];

		// look at each entry
		for (var i = 0; i < this.entries.length; i++) {
			var currentEntry = this.entries[i];

			// add it to the array if it has the tag	
			if (currentEntry.hasTag(tag)) {
				foundEntries.push(currentEntry);
			}
		}
		// return all the entries with the tag
		return foundEntries;
	}
}

function Entry(title, content, author, tags) {
	this.title = title;
	this.content = content;
	this.author = author;
	this.tags = tags;

	this.tags =tags;
	this.toHTML = function() {
		var htmlString = "";
		htmlString+="<article>";
		htmlString+="<h3>" + this.title + "</h3>";
		htmlString+="<h5> By: " + this.author + "</h5>";
		htmlString+="<div>" + this.content + "</div>";
		htmlString+="</article";
		return htmlString;
	}

	// returns whether or not the Entry has a given tag
	this.hasTag = function (tag) {
		for (var i = 0; i < this.tags.length; i++) {
			if (this.tags[i] === tag) {
				return true;
			}
		}
		return false;
	}
}


// TESTING CODE
var myJournal = new Journal();
myJournal.addEntry("My Coding Life", "Everything is great!", "Cherie", ["Friday", "Boring"]);
myJournal.addEntry("Shit Just Got Real", "What happened? Everything is terrible", "Kush", ["Monday", "Boring"]);
myJournal.addEntry("Think About It", "Real Eyes Realize Real Lies", "Jon", ["Deep", "Eyes", "Swag"]);
myJournal.addEntry("Huh?", "Who gave my journal to Jaden?", "Ben", ["Confused"]);
