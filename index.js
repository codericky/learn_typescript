// fungsi
function getName(data) {
    return data.NamaDepan + " \n        " + data.NamaBelakang + "\n        " + data.MyHobby + "\n        ";
}
var data = {
    NamaDepan: 'Ricky',
    NamaBelakang: 'Noviansyah',
    MyHobby: 'Coder'
};
console.log(getName(data));
