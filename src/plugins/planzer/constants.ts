export const PLANZER_PLUGIN_OPTIONS = Symbol('PLANZER_PLUGIN_OPTIONS');

/** Internal codes for Vendure logic */
export const PLANZER_HANDLER_CODE = 'planzer-fulfillment-handler';
export const PLANZER_LABEL_CUSTOM_FIELD = 'planzerLabelUrl';

/** Planzer API Endpoints */
export const PLANZER_API_BASE_URL = 'https://api.planzer.ch/v1';
export const PLANZER_SHIPMENT_ENDPOINT = `${PLANZER_API_BASE_URL}/shipments`;

/** UI Labels */
export const PLANZER_UI_LABELS = {
    HANDLER_DESCRIPTION: 'Planzer Paket Fulfillment',
    LABEL_URL_FIELD: 'Planzer Label URL',
    PRINT_BUTTON: 'Print Planzer Label',
};