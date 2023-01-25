let users = [
    {
        name:'Alex'
    },
    {  
        name:'Alica'
    },
    { 
        name:'Ranaldo'
    },
    {
        name:'Lena'
    }, 
    {
        name:'Andrew'
    },
    {
        name:'Jemes'
    },
    {
        name:'Mount'
    },
    {
        name:'Mendy'
    },
    {
        name:'Saber'
    },
    {
        name:'Silva'
    }  
];

 
 function names(Student){

	if (Student.name.length > 5 ){
		console.log(Student.name ,"5 ta harfdan katta")

	}else if (Student.name.length < 5){
		console.log(Student.name ,"5 ta harfdan kam")

	}else {
	console.log(Student.name ,"5 ta harfga teng")
    }
}

for (let i = 0; i < users.length; i++){
	names(users[i])
}