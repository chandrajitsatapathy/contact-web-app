var tabledata=        [
            {
                
                "Name": "Clark"  
            },
            {   
                "Name": "Bruce"

                
            },
            {   
                "Name": "Peter"
            }
        ]


for(var i  in tabledata){
    var row = `<tr>
               <td>${tabledata[i].Name}</td>
               </tr>`

    var table = $('#contact_table')
    table.append(row)
            }