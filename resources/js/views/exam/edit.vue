<template>
    <div>
        <div class="page-titles">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <h3 class="text-themecolor">{{trans('exam.edit_exam')}}</h3>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="action-buttons pull-right">
                        <button class="btn btn-info btn-sm" @click="$router.push('/exam')"><i class="fas fa-list"></i> <span class="d-none d-sm-inline">{{trans('exam.edit_exam')}}</span></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="card card-form">
                <div class="card-body p-t-20">
                    <exam-form :id="id"></exam-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import examForm from './form';

    export default {
        components : { examForm },
        data() {
            return {
                id:this.$route.params.id
            }
        },
        mounted(){
            if(!helper.hasPermission('edit-exam')){
                helper.notAccessibleMsg();
                this.$router.push('/dashboard');
            }
        }
    }
</script>
