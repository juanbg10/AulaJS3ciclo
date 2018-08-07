public class Caneta(){
    String modelo;
    String cor;
    float ponta;
    int carga;
    boolean tampada;
    
    public void status{
        System.out.println("O modelo é:"+this.modelo);
        System.out.println("O cor da caneta:"+this.cor);
        System.out.println("Ponta de número:"+this.ponta);
        System.out.println("Carga da caneta:"+this.carga);
        System.out.println("A caneta está tampada?"this.tampada);
    }
    
    public void rabiscar{
        if( this.tampada == true){
            System.out.println("Erro! Não posso rabiscar");
        } else {
            System.out.println("Rabiscando!!!!");
        }
    }
    
    public void tampar{
        this.tampada ==  true;
    }
    
    public void destampar{
        this.tamapda == false;
    }
}