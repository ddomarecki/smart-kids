var zwierzętaFutrzaste = ["Alpaka", "Lemur Katta", "Yeti"];
var zwierzętaŁuszczaste = ["Boa Dusiciel", "Godzilla"];
var zwierzętaFutrzasteIŁuszczaste = zwierzętaFutrzaste.concat(zwierzętaŁuszczaste);
zwierzętaFutrzasteIŁuszczaste;
// ["Alpaka", "Lemur Katta", "Yeti", "Boa Dusiciel", "Godzilla"]
zwierzętaFutrzaste;
// ["Alpaka", "Lemur Katta", "Yeti"]
zwierzętaŁuszczaste;
// ["Boa Dusiciel", "Godzilla"]

var zwierzętaFutrzaste = ["Alpaka", "Lemur Katta", "Yeti"];
var zwierzętaŁuszczaste = ["Boa Dusiciel", "Godzilla"];
var zwierzętaPierzaste = ["Ara", "Dodo"];
var wszystkieZwierzęta = zwierzętaFutrzaste.concat(zwierzętaŁuszczaste, zwierzętaPierzaste);
wszystkieZwierzęta;
// ["Alpaka", "Lemur Katta", "Yeti", "Boa Dusiciel", "Godzilla", "Ara", "Dodo"]