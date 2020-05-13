let xml = new XMLHttpRequest();
let url = "json/data.json";

xml.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
    }
};
xml.open("GET", url, true);
xml.send();

function loadJSONfile() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'json/data.json', true);
    xhr.responseType = 'text';

    xhr.overrideMimeType("application/json");

    xhr.onload = function () {
        if (xhr.status === 200) {
            studentNames = JSON.parse(xhr.responseText);

            //console.log(studentNames.students[4]);
            for (let i = 0; i < studentNames.students.length; i++) {
                studentData = new person();
                studentData.firstName = studentNames.students[i].first;
                studentData.lastName = studentNames.students[i].last;
                studentData.nickName = studentNames.students[i].nickname;
                studentData.eMail = studentNames.students[i].email;
                studentData.slackName = studentNames.students[i].slackname;
                studentData.cOntact = studentNames.students[i].contact;
                studentData.hObby = studentNames.students[i].hobby;

            }
        }
    }
    xhr.send();

}

loadJSONfile();

function person() {
    this.firstName = "";
    this.lastName = "";
    this.slackName = "";
    this.nickName = "";
    this.email = "";
    this.phone = "";
    this.hobby = ""
};

let fN = document.getElementById('firstName');
let lN = document.getElementById('lastName');
let nN = document.getElementById('nickName');
let eM = document.getElementById('email');
let sN = document.getElementById('slackName');
let cO = document.getElementById('contact');
let hO = document.getElementById('hobby');

abraham.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[0].first;
    lN.innerHTML = studentNames.students[0].last;
    nN.innerHTML = studentNames.students[0].nickname;
    eM.innerHTML = studentNames.students[0].email;
    sN.innerHTML = studentNames.students[0].slackname;
    cO.innerHTML = studentNames.students[0].contact;
    hO.innerHTML = studentNames.students[0].hobby;
});

alex.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[1].first;
    lN.innerHTML = studentNames.students[1].last;
    nN.innerHTML = studentNames.students[1].nickname;
    eM.innerHTML = studentNames.students[1].email;
    sN.innerHTML = studentNames.students[1].slackname;
    cO.innerHTML = studentNames.students[1].contact;
    hO.innerHTML = studentNames.students[1].hobby;
});

angel.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[2].first;
    lN.innerHTML = studentNames.students[2].last;
    nN.innerHTML = studentNames.students[2].nickname;
    eM.innerHTML = studentNames.students[2].email;
    sN.innerHTML = studentNames.students[2].slackname;
    cO.innerHTML = studentNames.students[2].contact;
    hO.innerHTML = studentNames.students[2].hobby;
});

bisola.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[3].first;
    lN.innerHTML = studentNames.students[3].last;
    nN.innerHTML = studentNames.students[3].nickname;
    eM.innerHTML = studentNames.students[3].email;
    sN.innerHTML = studentNames.students[3].slackname;
    cO.innerHTML = studentNames.students[3].contact;
    hO.innerHTML = studentNames.students[3].hobby;
});

carter.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[4].first;
    lN.innerHTML = studentNames.students[4].last;
    nN.innerHTML = studentNames.students[4].nickname;
    eM.innerHTML = studentNames.students[4].email;
    sN.innerHTML = studentNames.students[4].slackname;
    cO.innerHTML = studentNames.students[4].contact;
    hO.innerHTML = studentNames.students[4].hobby;
});

dave.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[5].first;
    lN.innerHTML = studentNames.students[5].last;
    nN.innerHTML = studentNames.students[5].nickname;
    eM.innerHTML = studentNames.students[5].email;
    sN.innerHTML = studentNames.students[5].slackname;
    cO.innerHTML = studentNames.students[5].contact;
    hO.innerHTML = studentNames.students[5].hobby;
});

deon.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[6].first;
    lN.innerHTML = studentNames.students[6].last;
    nN.innerHTML = studentNames.students[6].nickname;
    eM.innerHTML = studentNames.students[6].email;
    sN.innerHTML = studentNames.students[6].slackname;
    cO.innerHTML = studentNames.students[6].contact;
    hO.innerHTML = studentNames.students[6].hobby;
});

dennis.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[7].first;
    lN.innerHTML = studentNames.students[7].last;
    nN.innerHTML = studentNames.students[7].nickname;
    eM.innerHTML = studentNames.students[7].email;
    sN.innerHTML = studentNames.students[7].slackname;
    cO.innerHTML = studentNames.students[7].contact;
    hO.innerHTML = studentNames.students[7].hobby;
});

carson.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[8].first;
    lN.innerHTML = studentNames.students[8].last;
    nN.innerHTML = studentNames.students[8].nickname;
    eM.innerHTML = studentNames.students[8].email;
    sN.innerHTML = studentNames.students[8].slackname;
    cO.innerHTML = studentNames.students[8].contact;
    hO.innerHTML = studentNames.students[8].hobby;
});

esteban.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[9].first;
    lN.innerHTML = studentNames.students[9].last;
    nN.innerHTML = studentNames.students[9].nickname;
    eM.innerHTML = studentNames.students[9].email;
    sN.innerHTML = studentNames.students[9].slackname;
    cO.innerHTML = studentNames.students[9].contact;
    hO.innerHTML = studentNames.students[9].hobby;
});

francisco.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[10].first;
    lN.innerHTML = studentNames.students[10].last;
    nN.innerHTML = studentNames.students[10].nickname;
    eM.innerHTML = studentNames.students[10].email;
    sN.innerHTML = studentNames.students[10].slackname;
    cO.innerHTML = studentNames.students[10].contact;
    hO.innerHTML = studentNames.students[10].hobby;
});

johnny.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[11].first;
    lN.innerHTML = studentNames.students[11].last;
    nN.innerHTML = studentNames.students[11].nickname;
    eM.innerHTML = studentNames.students[11].email;
    sN.innerHTML = studentNames.students[11].slackname;
    cO.innerHTML = studentNames.students[11].contact;
    hO.innerHTML = studentNames.students[11].hobby;
});

jon.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[12].first;
    lN.innerHTML = studentNames.students[12].last;
    nN.innerHTML = studentNames.students[12].nickname;
    eM.innerHTML = studentNames.students[12].email;
    sN.innerHTML = studentNames.students[12].slackname;
    cO.innerHTML = studentNames.students[12].contact;
    hO.innerHTML = studentNames.students[12].hobby;
});

jose.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[13].first;
    lN.innerHTML = studentNames.students[13].last;
    nN.innerHTML = studentNames.students[13].nickname;
    eM.innerHTML = studentNames.students[13].email;
    sN.innerHTML = studentNames.students[13].slackname;
    cO.innerHTML = studentNames.students[13].contact;
    hO.innerHTML = studentNames.students[13].hobby;
});

kevin.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[14].first;
    lN.innerHTML = studentNames.students[14].last;
    nN.innerHTML = studentNames.students[14].nickname;
    eM.innerHTML = studentNames.students[14].email;
    sN.innerHTML = studentNames.students[14].slackname;
    cO.innerHTML = studentNames.students[14].contact;
    hO.innerHTML = studentNames.students[14].hobby;
});

kurt.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[15].first;
    lN.innerHTML = studentNames.students[15].last;
    nN.innerHTML = studentNames.students[15].nickname;
    eM.innerHTML = studentNames.students[15].email;
    sN.innerHTML = studentNames.students[15].slackname;
    cO.innerHTML = studentNames.students[15].contact;
    hO.innerHTML = studentNames.students[15].hobby;
});

lourn.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[16].first;
    lN.innerHTML = studentNames.students[16].last;
    nN.innerHTML = studentNames.students[16].nickname;
    eM.innerHTML = studentNames.students[16].email;
    sN.innerHTML = studentNames.students[16].slackname;
    cO.innerHTML = studentNames.students[16].contact;
    hO.innerHTML = studentNames.students[16].hobby;
});

nayo.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[17].first;
    lN.innerHTML = studentNames.students[17].last;
    nN.innerHTML = studentNames.students[17].nickname;
    eM.innerHTML = studentNames.students[17].email;
    sN.innerHTML = studentNames.students[17].slackname;
    cO.innerHTML = studentNames.students[17].contact;
    hO.innerHTML = studentNames.students[17].hobby;
});

nimish.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[18].first;
    lN.innerHTML = studentNames.students[18].last;
    nN.innerHTML = studentNames.students[18].nickname;
    eM.innerHTML = studentNames.students[18].email;
    sN.innerHTML = studentNames.students[18].slackname;
    cO.innerHTML = studentNames.students[18].contact;
    hO.innerHTML = studentNames.students[18].hobby;
});

robert.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[19].first;
    lN.innerHTML = studentNames.students[19].last;
    nN.innerHTML = studentNames.students[19].nickname;
    eM.innerHTML = studentNames.students[19].email;
    sN.innerHTML = studentNames.students[19].slackname;
    cO.innerHTML = studentNames.students[19].contact;
    hO.innerHTML = studentNames.students[19].hobby;
});

stephanie.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[20].first;
    lN.innerHTML = studentNames.students[20].last;
    nN.innerHTML = studentNames.students[20].nickname;
    eM.innerHTML = studentNames.students[20].email;
    sN.innerHTML = studentNames.students[20].slackname;
    cO.innerHTML = studentNames.students[20].contact;
    hO.innerHTML = studentNames.students[20].hobby;
});

trever.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[21].first;
    lN.innerHTML = studentNames.students[21].last;
    nN.innerHTML = studentNames.students[21].nickname;
    eM.innerHTML = studentNames.students[21].email;
    sN.innerHTML = studentNames.students[21].slackname;
    cO.innerHTML = studentNames.students[21].contact;
    hO.innerHTML = studentNames.students[21].hobby;
});

zach.addEventListener('click', function (){
    fN.innerHTML = studentNames.students[22].first;
    lN.innerHTML = studentNames.students[22].last;
    nN.innerHTML = studentNames.students[22].nickname;
    eM.innerHTML = studentNames.students[22].email;
    sN.innerHTML = studentNames.students[22].slackname;
    cO.innerHTML = studentNames.students[22].contact;
    hO.innerHTML = studentNames.students[22].hobby;
});
