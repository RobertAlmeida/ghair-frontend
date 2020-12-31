<template>
  <div class="container">
    <div class="text-right pt-4 pb-4">
      <button class="btn btn-info">
        <a href="" class="btn btn-info"> + Adicionar profissional</a>
      </button>
    </div>
    <div class="col-md">
      <div class="row">
        <!---->
        <div class="col-md-4 col-sm-6">
          <div class="card">
            <div class="card-box">
              <div class="card-icons">
                <a
                  class="edit m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill"
                  data-toggle="modal"
                  href="#"
                  title="Ver/Editar"
                >
                  <i class="la la-edit"></i>
                </a>
                <swal
                  cancelbuttontext="Cancelar"
                  confirmbuttontext="Confirmar"
                  text="Essa ação não poderá ser desfeita"
                  type="warning"
                ></swal>

                <a
                  class="remove m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill btn-trash"
                  href="#"
                  title="Remover"
                >
                  <i class="la la-trash"></i>
                </a>
              </div>
              <div class="img-card" style="cursor: pointer">
                <img
                  alt=""
                  src="data:image/jpeg;base64,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"
                />
              </div>

              <div class="card-info">
                <div class="card-caption">
                  <h4
                    class="title"
                    style="cursor: pointer; margin-bottom: 0.5em"
                  >
                    Robert Almeida
                  </h4>
                  <p class="sub-title user" style="color: black">
                    <span class="m-widget4__sub">Barbeiro</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Adicionar profissional</h5>
					<button aria-label="Close" class="close" data-dismiss="modal" type="button">
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div class="modal-body scroll">
					<ul class="nav nav-tabs" role="tablist" style="height: 33px;">
						<li class="nav-item">
							<a class="nav-link active" data-target="#tab_profData" data-toggle="tab" href="#" id="addTab1">
								<i class="flaticon-avatar"></i>Dados</a>
						</li>
						<!---->
						<li class="nav-item">
							<a class="nav-link" data-target="#tab_working1" data-toggle="tab" href="#">
								<i class="flaticon-clock-2"></i>Horários</a>
						</li>
					</ul>
					<div class="tab-content">

						<div class="tab-pane active" id="tab_profData" role="tabpanel">

							<div class="portlet light">

								<form class="form ng-pristine ng-invalid ng-touched" novalidate="" padding="">
									<!---->

									<div class="portlet-body form">
										<div class="form-body">
											<div class="row">
												<div class="col-md-3">
													<div class="form-group">
														<div class="cropme text-center">
															<!---->
															<!----><img alt="" class="add-modal-photo" src="https://s3-sa-east-1.amazonaws.com/storagesalon/default.jpg">
														</div>
														<div class="clear"></div>
														<!----><label class="btn btn-login" style="width: 100%; margin-top:-8em;height:7em;">
															<input accept="image/*" autocomplete="doNotAutoComplete" imageupload="" style="display:none" type="file">
														</label>
													</div>
												</div>
												<div class="col-md-5">
													<div class="form-group m-form__group">
														<label for="exampleInputEmail1">Nome</label>
														<div class="input-group m-input-group">
															<div class="input-group-prepend">
																<span class="input-group-text" id="basic-addon1">
																	<i class="la la-user"></i>
																</span>
															</div>
															<input aria-describedby="basic-addon1" autocomplete="doNotAutoComplete" class="form-control m-input ng-pristine ng-invalid ng-touched input-invalid" no-init-space="" type="text">
														</div>
													</div>
													<!----><div class="input-error" no-lines="" text-wrap="">
														<!----><p>
															Campo obrigatório</p>
														<!---->
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group m-form__group">
														<label for="exampleInputEmail1">Realiza serviços?</label>
														<div class="input-group m-input-group">
															<div class="input-group-prepend">
																<span class="input-group-text" id="basic-addon1">
																	<i class="la la-cut"></i>
																</span>
															</div>
															<select autocomplete="on" class="custom-select form-control ng-untouched ng-pristine ng-valid">
																<option selected=""></option>
																<option value="sim">Sim</option>
																<option value="nao">Não</option>
															</select>
														</div>
													</div>
													<!---->
												</div>

												<div class="col-6">
													<div class="form-group m-form__group">
														<label for="exampleInputEmail1">Dar acesso ao
															sistema?</label>
														<div class="input-group m-input-group">
															<div class="input-group-prepend">
																<span class="input-group-text" id="basic-addon1">
																	<i class="la la-cut"></i>
																</span>
															</div>
															<select autocomplete="on" class="custom-select form-control ng-untouched ng-pristine ng-invalid">
																<option value="sim">Sim</option>
																<option value="nao">Agora não</option>
															</select>
														</div>
													</div>
													<!---->
												</div>
												<!---->


												<!---->

												<!---->
												<div class="col-md-6">
													<div class="form-group m-form__group">
														<label for="exampleInputEmail1">Recebe comissão?</label>
														<div class="input-group m-input-group">
															<div class="input-group-prepend">
																<span class="input-group-text" id="basic-addon1">
																	<i class="la la-cut"></i>
																</span>
															</div>
															<select autocomplete="on" class="custom-select form-control ng-untouched ng-pristine ng-valid">
																<option selected=""></option>
																<option value="sim">Sim</option>
																<option value="nao">Não</option>
															</select>
														</div>
													</div>
													<!---->
												</div>

												<div class="col-md-6" hidden="">
													<div class="form-group m-form__group">
														<label for="exampleInputEmail1">Descontar taxa do cartão da
															comissão?</label>
														<div class="input-group m-input-group">
															<div class="input-group-prepend">
																<span class="input-group-text" id="basic-addon1">
																	<i class="la la-cut"></i>
																</span>
															</div>
															<select class="custom-select form-control ng-untouched ng-pristine ng-valid">
																<option value="sim_antes">Sim, antes de calcular a
																	porcentagem</option>
																<option value="sim_depois">Sim, depois de calcular a
																	porcentagem</option>
																<option value="nao">Não</option>
															</select>
														</div>
													</div>
												</div>

												<div class="col-md-6" hidden="">
													<div class="form-group m-form__group">
														<label for="exampleInputEmail1">Descontar taxa adicional da
															comissão?</label>
														<div class="input-group m-input-group">
															<div class="input-group-prepend">
																<span class="input-group-text" id="basic-addon1">
																	<i class="la la-cut"></i>
																</span>
															</div>
															<select class="custom-select form-control ng-untouched ng-pristine ng-valid">
																<option value="sim">Sim</option>
																<option value="nao">Não</option>
															</select>
														</div>
													</div>
												</div>

												<div class="col-md-6" hidden="">
													<div class="form-group m-form__group">
														<label for="exampleInputEmail1">Taxa adicional (%)</label>
														<div class="input-group m-input-group">
															<div class="input-group-prepend">
																<span class="input-group-text" id="basic-addon1">
																	<i class="la la-cut"></i>
																</span>
															</div>
															<input aria-describedby="basic-addon1" autocomplete="doNotAutoComplete" class="form-control m-input ng-untouched ng-pristine ng-valid" maxlength="3" pattern="[0-9]*" percent="" type="text">
														</div>
													</div>
													<!---->
												</div>

												<div class="col-md-6" hidden="">
													<div class="form-group m-form__group">
														<label for="exampleInputEmail1">Descontar comissão do
															auxiliar
															da comissão?</label>
														<div class="input-group m-input-group">
															<div class="input-group-prepend">
																<span class="input-group-text" id="basic-addon1">
																	<i class="la la-cut"></i>
																</span>
															</div>
															<select class="custom-select form-control ng-untouched ng-pristine ng-valid">
																<option value="sim">Sim</option>
																<option value="nao">Não</option>
															</select>
														</div>
													</div>
												</div>

												<div class="col-md-6" hidden="">
													<div class="form-group m-form__group">
														<label for="exampleInputEmail1">Descontar os custos com
															produtos
															do valor da venda antes de calcular a
															comissão do profissional?</label>
														<div class="input-group m-input-group">
															<div class="input-group-prepend">
																<span class="input-group-text" id="basic-addon1">
																	<i class="la la-cut"></i>
																</span>
															</div>
															<select class="custom-select form-control ng-untouched ng-pristine ng-valid">
																<option value="sim">Sim</option>
																<option value="nao">Não</option>
															</select>
														</div>
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label align="center" class="control-label">&nbsp;&nbsp;&nbsp;&nbsp;Aniversário (Dia
															e
															Mês)</label>
														<br>
														<div class="row">
															<div class="col-md-4">
																<select class="custom-select form-control ng-untouched ng-pristine ng-valid" id="dia_niver" integer="" maxlength="2" name="dia_niver" placeholder="Dia" style="text-align: right;" value="" zero="false">
																	<!----><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option>
																</select>
																<!---->
															</div>

															<div class="col-md-8">
																<select autocomplete="on" class="custom-select form-control ng-untouched ng-pristine ng-valid" id="mes_niver" integer="" maxlength="2" name="mes_niver" placeholder="Mês" style="text-align: right;" value="" zero="false">
																	<option></option>
																	<!----><option value="1">Janeiro</option><option value="2">Fevereiro</option><option value="3">Março</option><option value="4">Abril</option><option value="5">Maio</option><option value="6">Junho</option><option value="7">Julho</option><option value="8">Agosto</option><option value="9">Setembro</option><option value="10">Outubro</option><option value="11">Novembro</option><option value="12">Dezembro</option>
																</select>
																<!---->
															</div>

														</div>
														<div class="row">
															<!---->
														</div>
													</div>
												</div>


											</div>
											<div class="row">
												<div class="col-md-12">
													<label> Observações</label>
													<textarea class="form-control ng-untouched ng-pristine ng-valid" id="notes" name="notes" rows="3"></textarea>
												</div>
												<div class="row">
												</div>
											</div>
										</div>
										<input autocomplete="doNotAutoComplete" id="id" name="id" type="hidden" value="">
									</div>
								</form>
							</div>
						</div>
						<div class="tab-pane" id="tab_skills" role="tabpanel">
							<div class="row">
								<div class="col-12" style="padding-left:0">
									<div class="m-input-icon m-input-icon--left" id="m_blockui_1_content">
										<input autocomplete="doNotAutoComplete" class="search-table form-control m-input ng-untouched ng-pristine ng-valid" name="searchSkill" placeholder="Pesquisar" type="text">
										<span class="m-input-icon__icon m-input-icon__icon--left">
											<span>
												<i class="la la-search"></i>
											</span>
										</span>
									</div>
								</div>
							</div>
							<!---->
							<!---->
							<div class="m-widget2 scroll" style="height: 220px; padding-bottom: 0px;">
								<div class="row">
									<div class="col-12">
										<div class="m-widget2__item m-widget2__item--success">
											<div class="m-widget2__checkbox">
												<label class="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input autocomplete="doNotAutoComplete" type="checkbox" class="ng-untouched ng-pristine ng-valid">
													<span></span>
												</label>
											</div>
											<div class="m-widget2__desc">
												<span class="m-widget2__text" style="color: #2196F3;">
													Marcar todos
												</span>
											</div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-6">
										<!----><div>
											<!----><div class="m-widget2__item m-widget2__item--success">
												<div class="m-widget2__checkbox">
													<label class="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
														<input autocomplete="doNotAutoComplete" type="checkbox" class="ng-untouched ng-pristine ng-valid">
														<span></span>
													</label>
												</div>
												<div class="m-widget2__desc">
													<span class="m-widget2__text">
														Serviço Exemplo
													</span>
												</div>
												<!---->
											</div>
										</div>
									</div>

									<div class="col-6">
										<!----><div>
											<!---->
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane" id="tab_working1" role="tabpanel">
							<div class="m-widget2">
								<!---->

								<!----><div class="m-widget2__item m-widget2__item--success">

									<div class="row">
										<div class="col-4">
											<div class="m-widget2__checkbox">
												<label class="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input autocomplete="doNotAutoComplete" type="checkbox" class="ng-untouched ng-pristine ng-valid">
													<span></span>
												</label>
											</div>
											<div class="m-widget2__desc">
												<span class="m-widget2__text"> Segunda
												</span>
											</div>
										</div>
										<!---->
									</div>
									<!---->
									<!---->
								</div><div class="m-widget2__item m-widget2__item--success">

									<div class="row">
										<div class="col-4">
											<div class="m-widget2__checkbox">
												<label class="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input autocomplete="doNotAutoComplete" type="checkbox" class="ng-untouched ng-pristine ng-valid">
													<span></span>
												</label>
											</div>
											<div class="m-widget2__desc">
												<span class="m-widget2__text"> Terça
												</span>
											</div>
										</div>
										<!---->
									</div>
									<!---->
									<!---->
								</div><div class="m-widget2__item m-widget2__item--success">

									<div class="row">
										<div class="col-4">
											<div class="m-widget2__checkbox">
												<label class="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input autocomplete="doNotAutoComplete" type="checkbox" class="ng-untouched ng-pristine ng-valid">
													<span></span>
												</label>
											</div>
											<div class="m-widget2__desc">
												<span class="m-widget2__text"> Quarta
												</span>
											</div>
										</div>
										<!---->
									</div>
									<!---->
									<!---->
								</div><div class="m-widget2__item m-widget2__item--success">

									<div class="row">
										<div class="col-4">
											<div class="m-widget2__checkbox">
												<label class="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input autocomplete="doNotAutoComplete" type="checkbox" class="ng-untouched ng-pristine ng-valid">
													<span></span>
												</label>
											</div>
											<div class="m-widget2__desc">
												<span class="m-widget2__text"> Quinta
												</span>
											</div>
										</div>
										<!---->
									</div>
									<!---->
									<!---->
								</div><div class="m-widget2__item m-widget2__item--success">

									<div class="row">
										<div class="col-4">
											<div class="m-widget2__checkbox">
												<label class="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input autocomplete="doNotAutoComplete" type="checkbox" class="ng-untouched ng-pristine ng-valid">
													<span></span>
												</label>
											</div>
											<div class="m-widget2__desc">
												<span class="m-widget2__text"> Sexta
												</span>
											</div>
										</div>
										<!---->
									</div>
									<!---->
									<!---->
								</div><div class="m-widget2__item m-widget2__item--success">

									<div class="row">
										<div class="col-4">
											<div class="m-widget2__checkbox">
												<label class="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input autocomplete="doNotAutoComplete" type="checkbox" class="ng-untouched ng-pristine ng-valid">
													<span></span>
												</label>
											</div>
											<div class="m-widget2__desc">
												<span class="m-widget2__text"> Sábado
												</span>
											</div>
										</div>
										<!---->
									</div>
									<!---->
									<!---->
								</div><div class="m-widget2__item m-widget2__item--success">

									<div class="row">
										<div class="col-4">
											<div class="m-widget2__checkbox">
												<label class="m-checkbox m-checkbox--solid m-checkbox--single m-checkbox--brand">
													<input autocomplete="doNotAutoComplete" type="checkbox" class="ng-untouched ng-pristine ng-valid">
													<span></span>
												</label>
											</div>
											<div class="m-widget2__desc">
												<span class="m-widget2__text"> Domingo
												</span>
											</div>
										</div>
										<!---->
									</div>
									<!---->
									<!---->
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button class="btn btn-secondary" data-dismiss="modal" id="modalCancel" type="button">Cancelar</button>
					<!----><button class="btn btn-primary" type="button">
						<span>Adicionar</span>
					</button>
					<!---->
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="stylus"></style>