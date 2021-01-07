<template>
  <div class="container pt-2">
    <div class="text-right pt-4 pb-4">
      <button class="btn btn-success" v-b-modal.modal-1>
        + Criar agendamento
      </button>
    </div>
    <div class="col-md">
      <div class="card">
        <div class="row row-striped">
          <div class="col-2 text-right">
            <h1 class="display-4">
              <span class="badge badge-secondary">23</span>
            </h1>
            <h2>OCT</h2>
          </div>
          <div class="col-10">
            <h3 class="text-uppercase"><strong>Ice Cream Social</strong></h3>
            <ul class="list-inline">
              <li class="list-inline-item">
                <i class="fa fa-calendar-o" aria-hidden="true"></i> Monday
              </li>
              <li class="list-inline-item">
                <i class="fa fa-clock-o" aria-hidden="true"></i> 12:30 PM - 2:00
                PM
              </li>
              <li class="list-inline-item">
                <i class="fa fa-location-arrow" aria-hidden="true"></i> Cafe
              </li>
            </ul>
            <p>
              Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="row row-striped">
          <div class="col-2 text-right">
            <h1 class="display-4">
              <span class="badge badge-secondary">27</span>
            </h1>
            <h2>OCT</h2>
          </div>
          <div class="col-10">
            <h3 class="text-uppercase"><strong>Operations Meeting</strong></h3>
            <ul class="list-inline">
              <li class="list-inline-item">
                <i class="fa fa-calendar-o" aria-hidden="true"></i> Friday
              </li>
              <li class="list-inline-item">
                <i class="fa fa-clock-o" aria-hidden="true"></i> 2:30 PM - 4:00
                PM
              </li>
              <li class="list-inline-item">
                <i class="fa fa-location-arrow" aria-hidden="true"></i> Room
                4019
              </li>
            </ul>
            <p>
              Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="modal-1" title="Agendamento" hide-footer>
      <form>
        <div class="form-group">
          <label for="listaServico">Selecione o serviço</label>
          <select class="form-control" id="listaServico">
            <option>-</option>
            <option v-for="servico of servicos" :key="servico.id">
              {{ servico.nome }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Selecione a data</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>-</option>
            <option>07/01 - Quinta-Feira</option>
            <option>08/01 - Sexta-Feira</option>
            <option>09/01 - Sábado</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Selecione a hora</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>-</option>
            <option>08:00</option>
            <option>09:00</option>
            <option>10:00</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Profissional</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>-</option>
            <option>Fulano</option>
            <option>Cicranio</option>
            <option>Beltranio</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Observação</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
          ></textarea>
        </div>
        <button class="btn btn-success w-100">Agendar</button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
	name: "ListAgenda",
	data() {
		return {
			servicos: [],
		};
	},
	methods: {
		async listServicos() {
			await axios.get(baseApiUrl + "/servico").then((resposta) => {
				this.servicos = resposta.data.data;
			});
		},
	},
	mounted() {
		this.listServicos();
	},
};
</script>

<style >
.row-striped:nth-of-type(odd) {
  background-color: #fafafa;
  border-left: 4px #000000 solid;
}

.row-striped:nth-of-type(even) {
  background-color: #fafafa;
  border-left: 4px #fafafa solid;
}

.row-striped {
  padding: 15px 0;
}
</style>