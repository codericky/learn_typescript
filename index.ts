// fungsi
function getName(data: {
    NamaDepan: string;
    NamaBelakang: string;
    MyHobby: string;
})

// mengembalikan sebuah variable string
{
return `${data.NamaDepan} 
        ${data.NamaBelakang}
        ${data.MyHobby}
        `;
}

//isi dari variable string
let data = {
    NamaDepan: 'Ricky',
    NamaBelakang: 'Noviansyah',
    MyHobby:'Coder'
};

console.log(getName(data));
