<template>
	<div>
        <div class="page-titles">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <h3 class="text-themecolor">{{trans('academic.add_new_certificate')}}</h3>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="action-buttons pull-right">
                        <button class="btn btn-info btn-sm" @click="$router.push('/academic/certificate')"><i class="fas fa-list"></i> <span class="d-none d-sm-inline">{{trans('academic.certificate')}}</span></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="card p-4">
                <div class="card-body">
                    <certificate-form></certificate-form>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
    import certificateForm from './form';

	export default {
		components: {certificateForm},
		data() {
			return {

			}
		},
		mounted(){
            if(!helper.hasPermission('create-certificate')){
                helper.notAccessibleMsg();
                this.$router.push('/dashboard');
            }
		},
		methods: {

		},
		computed: {

		},
		filters: {

		},
		watch: {
			
		}
	}
</script>