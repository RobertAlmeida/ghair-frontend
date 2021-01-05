<template>
  <div class="container">
    <div class="text-right pt-4 pb-4">
      <button class="btn btn-info" v-b-modal.modalProfissional @click="reset()">
        + Adicionar profissional
      </button>
    </div>
    <div class="col-md">
      <div class="row">
        <div
          class="col-md-4"
          v-for="profissional of profissionais"
          :key="profissional.id"
        >
          <b-card
            id="mainColor"
            border-variant="dark"
            :header="profissional.nome.toUpperCase()"
            header-bg-variant="dark"
            header-text-variant="white"
            align="center"
          >
            <b-card-text>
              <div class="text-left">
                <h5>Serviços</h5>
              </div>
              <b-list-group>
                <b-list-group-item
                  v-for="servi of profissional.servico"
                  :key="servi.name"
                  >{{ servi.name }}</b-list-group-item
                >
              </b-list-group>
            </b-card-text>
            <b-button
              href="#"
              variant="danger"
              @click="removeProfissional(profissional.id, profissional.email)"
              class="mr-2 pl-2"
              ><strong>Excluir</strong></b-button
            >

            <b-button
              href="#"
              variant="warning"
              @click="editProfissional(profissional)"
              v-b-modal.modalProfissional
              ><strong>Editar</strong></b-button
            >
          </b-card>
        </div>
      </div>
    </div>

    <!--Modal Profissional-->
    <b-modal id="modalProfissional" title="Adicionar profissional" hide-footer>
      <b-tabs content-class="mt-3" lazy>
        <!--Dados Abas-->
        <b-tab title="Dados">
          <form>
            <div class="row">
              <div class="col">
                <span>Nome</span>
                <input class="form-control" v-model="profissional.nome" />
              </div>
              <div class="col">
                <span>Telefone</span>
                <input class="form-control" v-model="profissional.fone" />
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col">
                <span>Status</span>
                <select class="form-control" v-model="profissional.status">
                  <option value="Ativo">Ativo</option>
                  <option value="desativado">Desativado</option>
                </select>
              </div>
              <div class="col">
                <span>Perfil</span>
                <select class="form-control" v-model="profissional.admin">
                  <option value="true">Admin</option>
                  <option value="false">Usuário</option>
                </select>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col">
                <span>Email</span>
                <input class="form-control" v-model="profissional.email" />
              </div>
              <div class="col">
                <span>Senha</span>
                <input class="form-control" v-model="profissional.password" />
              </div>
            </div>
            <br />
          </form>
        </b-tab>

        <!--Horarios Abas-->
        <b-tab title="Horarios">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Início</th>
                <th scope="col">Saída</th>
                <th scope="col">Trabalha ?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style="width: 10%">Seg</th>
                <td style="width: 25%">
                  <input
                    type="number"
                    class="form-control"
                    v-model="profissional.horarios.seg.inicio"
                  />
                </td>
                <td style="width: 25%">
                  <input
                    type="number"
                    class="form-control"
                    v-model="profissional.horarios.seg.saida"
                  />
                </td>
                <td style="width: 25%">
                  <select
                    class="form-control"
                    v-model="profissional.horarios.seg.trabalha"
                  >
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th style="width: 10%">Ter</th>
                <td style="width: 25%">
                  <input
                    type="number"
                    class="form-control"
                    v-model="profissional.horarios.ter.inicio"
                  />
                </td>
                <td style="width: 25%">
                  <input
                    type="number"
                    class="form-control"
                    v-model="profissional.horarios.ter.saida"
                  />
                </td>
                <td style="width: 25%">
                  <select
                    class="form-control"
                    v-model="profissional.horarios.seg.trabalha"
                  >
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th style="width: 10%">Qua</th>
                <td style="width: 25%">
                  <input
                    type="number"
                    class="form-control"
                    v-model="profissional.horarios.qua.inicio"
                  />
                </td>
                <td style="width: 25%">
                  <input
                    type="number"
                    class="form-control"
                    v-model="profissional.horarios.qua.saida"
                  />
                </td>
                <td style="width: 25%">
                  <select
                    class="form-control"
                    v-model="profissional.horarios.qua.trabalha"
                  >
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th style="width: 10%">Qui</th>
                <td style="width: 25%">
                  <input
                    type="number"
                    class="form-control"
                    v-model="profissional.horarios.qui.inicio"
                  />
                </td>
                <td style="width: 25%">
                  <input
                    type="number"
                    class="form-control"
                    v-model="profissional.horarios.qui.saida"
                  />
                </td>
                <td style="width: 25%">
                  <select
                    class="form-control"
                    v-model="profissional.horarios.qui.trabalha"
                  >
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th style="width: 10%">Sex</th>
                <td style="width: 25%">
                  <input
                    type="number"
                    class="form-control"
                    v-model="profissional.horarios.sex.inicio"
                  />
                </td>
                <td style="width: 25%">
                  <input
                    type="number"
                    class="form-control"
                    v-model="profissional.horarios.sex.saida"
                  />
                </td>
                <td style="width: 25%">
                  <select
                    class="form-control"
                    v-model="profissional.horarios.sex.trabalha"
                  >
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th style="width: 10%">Sab</th>
                <td style="width: 25%">
                  <input
                    type="number"
                    class="form-control"
                    v-model="profissional.horarios.sab.inicio"
                  />
                </td>
                <td style="width: 25%">
                  <input
                    type="number"
                    class="form-control"
                    v-model="profissional.horarios.sab.saida"
                  />
                </td>
                <td style="width: 25%">
                  <select
                    class="form-control"
                    v-model="profissional.horarios.sab.trabalha"
                  >
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th style="width: 10%">Dom</th>
                <td style="width: 25%">
                  <input
                    type="number"
                    class="form-control"
                    v-model="profissional.horarios.dom.inicio"
                  />
                </td>
                <td style="width: 25%">
                  <input
                    type="number"
                    class="form-control"
                    v-model="profissional.horarios.dom.saida"
                  />
                </td>
                <td style="width: 25%">
                  <select
                    class="form-control"
                    v-model="profissional.horarios.dom.trabalha"
                  >
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </b-tab>

        <!--Serviços Abas-->
        <b-tab title="Serviços">
          <div>
            <multiselect
              v-model="value"
              :options="options"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              placeholder="Selecione"
              label="name"
              track-by="name"
              :preselect-first="true"
            ></multiselect>
          </div>
        </b-tab>
      </b-tabs>

      <div class="modal-footer">
        <button
          class="btn btn-secondary"
          data-dismiss="modal"
          id="modalCancel"
          type="button"
        >
          Cancelar
        </button>
        <button
          class="btn btn-primary"
          @click="saveProfissional()"
          v-if="acao == 'Save'"
        >
          <span>Adicionar</span>
        </button>
        <button
          v-if="acao == 'Edit'"
          class="btn btn-warning"
          @click="profissionalEdit()"
        >
          <span>Editar</span>
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";
import Multiselect from "vue-multiselect";

export default {
	name: "FormProfissionais",
	components: {
		Multiselect,
	},
	data() {
		return {
			acao: "Save",
			profissionais: [],
			fields: ["Nome"],
			profissional: {
				nome: "",
				fone: "",
				status: "ativo",
				email: "",
				admin: "",
				password: "",
				iduser: localStorage.getItem("iduser"),
				horarios: {
					seg: {
						inicio: "",
						saida: "",
						trabalha: "sim",
					},
					ter: {
						inicio: "",
						saida: "",
						trabalha: "sim",
					},

					qua: {
						inicio: "",
						saida: "",
						trabalha: "sim",
					},

					qui: {
						inicio: "",
						saida: "",
						trabalha: "sim",
					},

					sex: {
						inicio: "",
						saida: "",
						trabalha: "sim",
					},

					sab: {
						inicio: "",
						saida: "",
						trabalha: "sim",
					},
					dom: {
						inicio: "",
						saida: "",
						trabalha: "sim",
					},
				},
				servico: {},
			},
			value: [],
			options: [],
		};
	},
	methods: {
		async listServicos() {
			await axios.get(baseApiUrl + "/servico").then((resposta) => {
				resposta.data.data.forEach((element) => {
					this.options.push({ name: element.nome, id: element.id });
				});
				this.servicos = resposta.data.data;
			});
		},
		async listProfissionais() {
			await axios.get(baseApiUrl + "/profissional").then((resposta) => {
				this.profissionais = resposta.data.data;
			});
		},
		async saveProfissional() {
			this.profissional.servico = this.value;
			await axios
				.post(baseApiUrl + "/profissional", this.profissional)
				.then(() => {
					this.reset();
					this.$bvModal.hide("modalProfissional");
					this.$bvToast.show("save-toast");
				})
				.catch(() => {
					this.$bvToast.show("error-toast");
				});
		},
		addTag(newTag) {
			const tag = {
				name: newTag,
				code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
			};
			this.options.push(tag);
			this.value.push(tag);
		},
		editProfissional(Prof) {
			this.profissional = { ...Prof };
			this.value = Prof.servico;
			this.acao = "Edit";
		},
		reset() {
			this.profissional = {
				nome: "",
				fone: "",
				status: "ativo",
				email: "",
				admin: "",
				password: "",
				iduser: localStorage.getItem("iduser"),
				horarios: {
					seg: {
						inicio: "",
						saida: "",
						trabalha: "sim",
					},
					ter: {
						inicio: "",
						saida: "",
						trabalha: "sim",
					},

					qua: {
						inicio: "",
						saida: "",
						trabalha: "sim",
					},

					qui: {
						inicio: "",
						saida: "",
						trabalha: "sim",
					},

					sex: {
						inicio: "",
						saida: "",
						trabalha: "sim",
					},

					sab: {
						inicio: "",
						saida: "",
						trabalha: "sim",
					},
					dom: {
						inicio: "",
						saida: "",
						trabalha: "sim",
					},
				},
				servico: {},
			};
			this.value = [];
			this.acao = "Save";
			this.listProfissionais();
		},
		async profissionalEdit() {
			this.profissional.servico = this.value;
			await axios
				.put(
					baseApiUrl + `/profissional/${this.profissional.id}`,
					this.profissional
				)
				.then(() => {
					this.reset();
					this.$bvModal.hide("modalProfissional");
					this.$bvToast.show("save-toast");
				})
				.catch(() => {
					this.$bvToast.show("error-toast");
				});
		},
		async removeProfissional(id, email) {
      
			await axios
				.delete(
					baseApiUrl + "/profissional/" + id + "/" + localStorage.getItem("iduser") + "/" + email
				)
				.then(() => {
					this.listProfissionais();
				});

		}
	},
	mounted() {
		this.listServicos();
		this.listProfissionais();
	},
};
</script>
<style lang="stylus"></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
