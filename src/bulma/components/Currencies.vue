<template>
    <a class="button"
        v-tooltip="tooltip ? currency.code : null"
        @click="next"
        v-if="currency">
        <span class="is-bold"
            v-if="symbol">
            {{ currency.symbol }}
        </span>
        <span class="is-bold"
            v-else>
            {{ currency.code }}
        </span>
    </a>
</template>

<script>
import { mapState } from 'vuex';
import { VTooltip } from 'v-tooltip';

export default {
    name: 'Currencies',

    directives: { tooltip: VTooltip },

    props: {
        allowed: {
            type: Array,
            default: () => ([]),
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        symbol: {
            type: Boolean,
            default: false,
        },
        tooltip: {
            type: Boolean,
            default: false,
        },
        value: {
            type: Number,
            default: null,
        },
    },

    computed: {
        ...mapState(['enums']),
        ...mapState('currencies', ['currencies']),
        default() {
            return this.currencies.find(({ isDefault }) => isDefault);
        },
        allowedCurrencies() {
            return this.allowed.length > 0 && this.currencies
                ? this.currencies.filter(({ id }) => this.allowed
                    .some(currency => currency.id === id))
                : this.currencies;
        },
        currency() {
            return this.allowedCurrencies
                && this.allowedCurrencies.find(({ id }) => id === this.value);
        },
        index() {
            return this.allowedCurrencies
                && this.allowedCurrencies.findIndex(({ id }) => id === this.value);
        },
    },

    created() {
        if (!this.value) {
            this.$emit('input', this.default.id);
        }
    },

    methods: {
        next() {
            if (this.readonly) {
                return;
            }

            const index = this.index === this.allowedCurrencies.length - 1
                ? 0
                : this.index + 1;

            this.$emit('input', this.allowedCurrencies[index].id);
        },
    },
};
</script>
