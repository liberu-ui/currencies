import axios from 'axios';
import route from '@enso-ui/ui/src/modules/plugins/route';

class Conversion {
    constructor() {
        this.fromId = null;
        this.toId = null;
        this.amountToConvert = null;
        this.conversionDate = null;
    }

    from(fromId) {
        this.fromId = fromId;
        return this;
    }

    to(toId) {
        this.toId = toId;
        return this;
    }

    amount(amountToConvert) {
        this.amountToConvert = amountToConvert;
        return this;
    }

    date(conversionDate) {
        this.conversionDate = conversionDate;
        return this;
    }

    handle() {
        return axios.get(
            route('administration.currencies.convert'),
            { params: this.params() },
        );
    }

    params() {
        return {
            from: this.fromId,
            to: this.toId,
            amount: this.amountToConvert,
            date: this.conversionDate,
        };
    }
}

export default Conversion;
