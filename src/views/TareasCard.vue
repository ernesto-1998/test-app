<template>
    <div class="max-container">
        <div class="whole-container">
            <div class="container-content">
                <div class="container-button">
                    <button @click="agregarTarea" class="first-button"> + </button>
                </div>
                
                <input type="text" class="main-input" v-model="texto"> 
            </div>
                    
        </div>
        <Card @update="item.state = true" :state="item.state" @delete="borrarTarea(i)" :titulo="item.title" v-for="(item, i) in tareas" :key="i"/>
    </div>
</template>

<script>

import Card from "../components/Card.vue"

export default {
    components: {
        Card
    },
    data() {
        return {
            tareas: [],
            texto:""
        }
    },

    methods: {
        agregarTarea(){
            this.tareas.push({title: this.texto, state: false})
            this.texto= "";
        },

        borrarTarea(parameter){
            this.tareas.splice(parameter, 1)
        }
    }
}
</script>

<style lang="less">
.max-container {
    margin: 0.5rem;

    .whole-container{
        padding: 0.25rem;

        .container-content{
            position: relative;
            display: flex;
            align-items: center;

            .container-button {
                position: absolute;
                right: 0px;
                height: 100%;
                top: 0px;
                display: flex;
                align-items: center;
                margin-right: 0.625rem;
                //padding: 1rem;

                .first-button {
                    background-color: blue;
                    height: 2.5rem;
                    width: 2.5rem;
                    border-radius: 9999px;
                    color: white;
                    font-size: 1.125rem;
                    line-height: 1.75rem;
                    font-weight: 800;
                    
            }
            }

            
            .main-input {
                border-width: 2px;
                --tw-border-opacity: 1;
                border-color: rgba(209, 213, 219, var(--tw-border-opacity));
                padding: 1rem;
                width: 100%;
                border-width: 2px;
                border-radius: 9999px;
            }
        } 
        

    }

}
</style>