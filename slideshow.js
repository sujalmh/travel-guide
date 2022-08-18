var slideIndex = ["images/8.jpg","images/9.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/4.jpg","images/14.jpg","images/15.jpg" ];
var i =0;
function update(){
    i++;
    x="url('"+slideIndex[i]+"')";
    document.getElementsByClassName("jumbotron")[0].style.backgroundImage=x;
    
    if(i==slideIndex.length){
        i=0;
        x="url('"+slideIndex[i]+"')";
        document.getElementsByClassName("jumbotron")[0].style.backgroundImage=x;


    }
     
}
   
function undo(){
    if(i==0){
        i=slideIndex.length;
        x="url('"+slideIndex[i]+"')";
        document.getElementsByClassName("jumbotron")[0].style.backgroundImage=x;

        }
        
    
        i--;
        x="url('"+slideIndex[i]+"')";
        document.getElementsByClassName("jumbotron")[0].style.backgroundImage=x;

        

}
