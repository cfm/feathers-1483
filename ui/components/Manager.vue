<template>
    <div id="manager">
        <p><strong>Requests:</strong>&nbsp;<span id="leaf_count">{{ numLeaves }}</span></p>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Manager',

    data () {
        return {
            numLeaves: 0,
            polling: null,
        };
    },

    computed: {
        ...mapGetters('counters', {
            counters: 'list',
            _findCounters: 'find',
        }),
    },

    methods: {
        ...mapActions('counters', {
            findCounters: 'find',
        }),
        pollCounters () {
            this.findCounters();
            this.polling = setInterval(this.findCounters, 5000);
        },
    },

    created () {
        this.pollCounters();
    },

    beforeDestroy () {
        clearInterval(this.polling)
    },

    watch: {
        counters: {
            immediate: true,
            handler () {
                try {
                    const { data } = this._findCounters({query: {_id: 'leaves'}});
                    this.numLeaves = data[0].COUNT;
                }
                catch (e) {
                    this.numLeaves = 0;
                }
            },
        },
    },
};
</script>
