abstract class subscription {
    
      

    abstract Price();

    abstract Time();

    abstract advertisements();
             
}


class Free extends subscription {

    public Price(){
        return 'FREE';
    }

    public Time(){
        return '15 days';
    } 

    public advertisements(){
        return 'Yes';
    }
    }

class Basic extends subscription {
    
       
    
    public Price(){
        return '3 USD';
    }

    public Time(){
        return '30 days';
    } 

    public advertisements(){
        return 'No';
    }
    }


class Premium extends subscription {
    
      
    public Price(  ) {
        return '9 USD';
    }

    public Time(){
        return '30 days';
    } 

    public advertisements(){
        return 'No';
    }
    }



let TipoUsuario = [
    new Free(),
    new Basic(),
    new Premium ()
]

TipoUsuario.forEach(TipoUsuario => {
    console.log( 'Price: ' + TipoUsuario.Price()),
    console.log( 'Days enabled: ' + TipoUsuario.Time())
    console.log( 'Advertisements: ' + TipoUsuario.advertisements())
    
})





