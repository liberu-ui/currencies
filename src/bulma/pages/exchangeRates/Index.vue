<template>
    <div class="wrapper">
        <div class="columns"
            v-if="ready">
            <div class="column">
                <enso-select-filter class="box raises-on-hover"
                    source="administration.currencies.options"
                    label="code"
                    :name="i18n('From')"
                    v-model="filters.fromCurrencies.id"/>
            </div>
            <div class="column">
                <enso-select-filter class="box raises-on-hover"
                    source="administration.currencies.options"
                    label="code"
                    :name="i18n('To')"
                    v-model="filters.toCurrencies.id"/>
            </div>
            <div class="column is-5-desktop">
                <enso-date-filter class="box raises-on-hover"
                    :name="i18n('Date')"
                    v-model:filter="params.interval"
                    v-model:interval="intervals.exchange_rates.date"/>
            </div>
        </div>
        <enso-table class="box is-paddingless raises-on-hover"
            id="exchangeRates"
            :filters="filters"
            :intervals="intervals"
            @reset="$refs.filterState.reset()"/>
        <filter-state name="exchangeRateFilterState"
            :api-version="apiVersion"
            :filters="filters"
            :intervals="intervals"
            :params="params"
            @ready="ready = true"
            ref="filterState"/>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { EnsoDateFilter, EnsoSelectFilter } from '@enso-ui/filters/bulma';
import { FilterState } from '@enso-ui/filters/renderless';
import { EnsoTable } from '@enso-ui/tables/bulma';

export default {
    name: 'Index',

    components: {
        EnsoDateFilter, EnsoSelectFilter, FilterState, EnsoTable,
    },

    inject: ['i18n'],

    data: () => ({
        ready: false,
        apiVersion: 2,
        filters: {
            fromCurrencies: { id: null },
            toCurrencies: { id: null },
        },
        intervals: {
            exchange_rates: {
                date: { min: null, max: null },
            },
        },
        params: { interval: 'today' },
    }),

    computed: {
        ...mapState(['enums']),
    },
};
</script>
