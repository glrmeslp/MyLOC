package Main;

import java.util.ArrayList;
import java.util.Scanner;

import Model.Text;

public class Main {

	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ArrayList<Text> cl = new ArrayList<Text>();
		
		for (int i = 1; i <= 3; ++i) {
			Scanner ler = new Scanner(System.in);
			Text pessoa = new Text ();
			String nome, cpf;
			
			
			System.out.printf("Informe o nome: ");
			nome = ler.next(); 
			pessoa.setNome(nome);
		
			System.out.printf("Informe o cpf: ");
			cpf = ler.next();
			pessoa.setCpf(cpf);
			
			cl.add(pessoa);
			
					
		}
	}

}
