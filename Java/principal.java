public class Principal{
    public static void main(String[] args){
        Caneta pen = new Caneta();
        pen.modelo = "BIC";
        pen.cor = "rosa";
        pen.ponta = 0.7;
        pen.carga = 100;
        pen.tampada = false;
        pen.status();
    }
}