package Model;

import java.sql.Date;
import java.util.ArrayList;

public class AluguelProdutoCliente {
	
	private long id;
	
	private float precoAluguel;
	
	private Date dataAluguel;
	
	private Date dataDevolucao;
	
	private Cliente cliente;
	
	private ArrayList<Produto> listaProdutos;
	
	public AluguelProdutoCliente() {
		this.listaProdutos = new ArrayList<Produto>();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public float getPrecoAluguel() {
		return precoAluguel;
	}

	public void setPrecoAluguel(float precoAluguel) {
		this.precoAluguel = precoAluguel;
	}

	public Date getDataAluguel() {
		return dataAluguel;
	}

	public void setDataAluguel(Date dataAluguel) {
		this.dataAluguel = dataAluguel;
	}

	public Date getDataDevolucao() {
		return dataDevolucao;
	}

	public void setDataDevolucao(Date dataDevolucao) {
		this.dataDevolucao = dataDevolucao;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public ArrayList<Produto> getListaProdutos() {
		return listaProdutos;
	}

	public void setListaProdutos(ArrayList<Produto> listaProdutos) {
		this.listaProdutos = listaProdutos;
	}
	
	
}
