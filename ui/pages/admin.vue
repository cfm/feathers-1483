<template>
    <div id="admin">
        <Manager />
    </div>
</template>

<script>
import Manager from "@/components/Manager.vue";

import { mapActions } from 'vuex';

export default {
    name: "user",
    components: {
        Manager,
    },
};
</script>
