<template>
    <div>
        <div class="page-titles">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <h3 class="text-themecolor">{{trans('reception.edit_enquiry_source')}}</h3>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="action-buttons pull-right">
                        <button class="btn btn-info btn-sm" @click="$router.push('/configuration/reception/enquiry/source')"><i class="fas fa-list"></i> <span class="d-none d-sm-inline">{{trans('reception.enquiry_source')}}</span></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="card card-form">
                <div class="card-body p-t-20">
                    <enquiry-source-form :id="id"></enquiry-source-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import enquirySourceForm from './form';

    export default {
        components : { enquirySourceForm },
        data() {
            return {
                id:this.$route.params.id
            }
        },
        mounted(){
            if(!helper.hasPermission('access-configuration')){
                helper.notAccessibleMsg();
                this.$router.push('/dashboard');
            }
        }
    }
</script>
