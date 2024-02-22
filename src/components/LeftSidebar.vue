<template>
    <sidebar class="left-sidebar">
        <div class="left-sidebar__top">
            <img src="../assets/images/logo.png" class="left-sidebar__logo" alt="GetMeGit.com">
            <h2 class="left-sidebar__page-name">Личный кабинет разработчика</h2>
        </div>
        <div class="left-sidebar-buttons">
            <Button type="light" class="left-sidebar-buttons__item">Настройки аккаунта</Button>
            <Button type="light" class="left-sidebar-buttons__item">Выйти</Button>
        </div>
    </sidebar>
</template>

<script setup lang="ts">
import Button from '@/components/elements/Button.vue';
</script>

<style>
.left-sidebar {
    background-color: #04202C;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 81px;
    padding-bottom: 81px;
    width: 440px;
    height: 100vh;
    box-shadow: 5px 4px 10px 0px rgba(0,0,0,0.25);
}

.left-sidebar__top {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    align-items: center;
}

.left-sidebar__page-name {
    color: #ffffff;
}

.left-sidebar__logo {
    width: 270px;
}

.left-sidebar-buttons {
    bottom: 200px;
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    width: 330px;
}

.left-sidebar-buttons__items {
    box-shadow: 5px 4px 10px 0px rgba(0,0,0,0.25);
}

</style>
