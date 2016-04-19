/**
 * Created by Жека on 19.04.2016.
 */
function numbers() {
    for(var count = 2; count<=10;count++)
    {
        if(count%2===0)
        {
            alert(count);
        }
    }
}
function checknumbers(){
   do{
       var number = prompt("Введите число > 100", 0);

   }while (number <= 100 ||number===null)
}

function forWhile(){
    document.write("<pre>for (var i = 0; i < 3; i++) </pre> ");
    var i = 0;
    while (i<3)
    {
        alert( "номер " + i + "!" ); i++;
    }

}/**
 * Created by Жека on 20.04.2016.
 */
