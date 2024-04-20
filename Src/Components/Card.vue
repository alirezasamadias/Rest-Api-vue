<template>
    <section class="card">
        <h3 class="card-title title-md">{{cardTitle}}</h3>
        
        <div class="card-id">{{props.cardId}}</div>
        
        <slot name="cardBody"></slot>

        <div class="card-btn">
            <router-link class="btn btn-primary" :to="{name: pageTarget , params: {id: cardId} }">{{btnText}}</router-link>

            <slot name="btnDelete"></slot>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['pageTarget', 'cardTitle', 'cardId', 'btnText']);
</script>

<style>
.card {
    width: 100%;
    padding: 30px;
    background-color: var(--bg-color-card);
    border-radius: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 15px;
    position: relative;
}

.card-id {
    width: 40px;
    height: 40px;
    background-color: var(--primary-color);
    border-radius: 50%;
    color: var(--bg-color);
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-title {
    padding-right: 40px;
}

.card-list {
    padding: 0 6%;
}

.card-list-item {
    padding: 7px 0;
    display: flex;
    justify-content: space-between;
    column-gap: 5px;
}

.card-btn {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
}

.card-btn .btn {
    width: 100%;
}

.card-btn:has(.btn-delete) .btn {
    width: 35%;
}

/* Responsive */
@media (max-width:600px) {
    .card {
        padding: 20px;
    }

    .card-id {
        transform: scale(0.85);
    }

    .card-list-item {
        flex-wrap: wrap;
    }

    .card-list-item :nth-child(2) {
        margin-left: auto;
    }
}
</style>