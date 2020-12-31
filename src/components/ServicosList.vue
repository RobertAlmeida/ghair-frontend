<template>
  <div class="container">
    <div class="text-right pt-4 pb-4">
      <b-button v-b-modal.modal-1>+ Adicionar serviço</b-button>
    </div>
    <div class="col-md">
      <div class="row">
        <div class="col-md-4" v-for="serv of servicos" :key="serv.id">
          <b-card
            id="mainColor"
            border-variant="secondary"
            header="SERIVÇO"
            header-bg-variant="secondary"
            header-text-variant="white"
            align="center"
          >
            <b-card-text
              ><h3>{{ serv.nome }}</h3></b-card-text
            >
            <div class="text-left">
              <b-card-text>Preço: R$ {{ serv.preco }}</b-card-text>
              <b-card-text
                >Duração: {{ serv.duracao.hora }}:{{
                  serv.duracao.minutos
                }}</b-card-text
              >
              <b-card-text>Observações: {{ serv.obs }}</b-card-text>
            </div>
            <br />
            <b-button
              href="#"
              variant="danger"
              @click="removeService(serv.id)"
              class="mr-2 pl-2"
              ><strong>Excluir</strong></b-button
            >

            <b-button
              href="#"
              variant="warning"
              v-b-modal.modal-edit
              @click="editService(serv)"
              ><strong>Editar</strong></b-button
            >
          </b-card>
        </div>
      </div>
    </div>

    <b-modal id="modal-1" title="Adicionar serviço" hide-footer>
      <div class="form-body">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Nome</label>
              <div class="input-group" id="exampleInputEmail1">
                <input
                  class="form-control"
                  name="name"
                  type="text"
                  v-model="servico.nome"
                />
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Preço</label>
              <div class="input-group">
                <input
                  class="form-control"
                  name="price"
                  type="number"
                  v-model="servico.preco"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Duração</label>
              <div class="input-group">
                <input class="form-control" v-model="servico.duracao.hora" />
                <div class="py-2 px-2">:</div>
                <input class="form-control" v-model="servico.duracao.minutos" />
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="statusService">Status</label>
              <div class="input-group">
                <select
                  name="statusService"
                  id="statusService"
                  class="form-control"
                  v-model="servico.status"
                >
                  <option value="ativo">Ativo</option>
                  <option value="desativado">Desativado</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top: 5px"></div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="exampleInputEmail1">Observações</label>
              <div class="input-group">
                <textarea
                  class="form-control"
                  v-model="servico.obs"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="btn btn-success" @click="saveDados()">Salvar</button>
      </div>
    </b-modal>

    <b-modal id="modal-edit" title="Editar serviço" hide-footer>
      <div class="form-body">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Nome</label>
              <div class="input-group" id="exampleInputEmail1">
                <input
                  class="form-control"
                  name="name"
                  type="text"
                  v-model="servico.nome"
                />
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Preço</label>
              <div class="input-group">
                <input
                  class="form-control"
                  name="price"
                  type="number"
                  v-model="servico.preco"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Duração</label>
              <div class="input-group">
                <input class="form-control" v-model="servico.duracao.hora" />
                <div class="py-2 px-2">:</div>
                <input class="form-control" v-model="servico.duracao.minutos" />
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="statusService">Status</label>
              <div class="input-group">
                <select
                  name="statusService"
                  id="statusService"
                  class="form-control"
                  v-model="servico.status"
                >
                  <option value="ativo">Ativo</option>
                  <option value="desativado">Desativado</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top: 5px"></div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="exampleInputEmail1">Observações</label>
              <div class="input-group">
                <textarea
                  class="form-control"
                  v-model="servico.obs"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="btn btn-success" @click="updateDados()">Salvar</button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
	name: "Servico",
	data: () => {
		return {
			servicos: [],
			servico: {
				nome: "",
				preco: 0,
				duracao: {
					hora: 0,
					minutos: 0,
				},
				status: "ativo",
				obs: "",
				iduser: localStorage.getItem("iduser"),
			},
		};
	},
	methods: {
		saveDados() {
			axios.post(baseApiUrl + "/servico", this.servico).then(() => {
				this.$bvModal.hide("modal-1");
				this.servico = {
					nome: "",
					preco: 0,
					duracao: {
						hora: 0,
						minutos: 0,
					},
					status: "ativo",
					obs: "",
					iduser: localStorage.getItem("iduser"),
				};
				this.listServicos();
			});
		},
		updateDados() {
			axios
				.put(baseApiUrl + "/servico/" + this.servico.id, this.servico)
				.then(() => {
					this.$bvModal.hide("modal-edit");
					this.servico = {
						nome: "",
						preco: 0,
						duracao: {
							hora: 0,
							minutos: 0,
						},
						status: "ativo",
						obs: "",
						iduser: localStorage.getItem("iduser"),
					};
					this.listServicos();
				});
		},
		async listServicos() {
			await axios.get(baseApiUrl + "/servico").then((resposta) => {
				this.servicos = resposta.data.data;
			});
		},
		async removeService(id) {
			await axios
				.delete(
					baseApiUrl + "/servico/" + id + "/" + localStorage.getItem("iduser")
				)
				.then((resposta) => {
					console.log(resposta.data);
					this.listServicos();
				});
		},
		editService(dadoUpdate) {
			this.servico = { ...dadoUpdate };
		},
	},
	mounted() {
		this.listServicos();
	},
};
</script>
<style>
#mainColor {
  box-shadow: 3px 3px 3px rgb(163, 163, 163);
}
</style>
