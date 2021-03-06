import * as validations from './states';

export const validateIE = (() => {
  const validationFns = {
    AC: validations.validateAC,
    AL: validations.validateAL,
    AP: validations.validateAP,
    AM: validations.validateAM,
    BA: validations.validateBA,
    CE: validations.validateCE,
    DF: validations.validateDF,
    ES: validations.validateES,
    GO: validations.validateGO,
    MA: validations.validateMA,
    MT: validations.validateMT,
    MS: validations.validateMS,
    MG: validations.validateMG,
    PA: validations.validatePA,
    PB: validations.validatePB,
    PR: validations.validatePR,
    PE: validations.validatePE,
    PI: validations.validatePI,
    RJ: validations.validateRJ,
    RN: validations.validateRN,
    RS: validations.validateRS,
    RO: validations.validateRO,
    RR: validations.validateRR,
    SC: validations.validateSC,
    SP: validations.validateSP,
    SE: validations.validateSE,
    TO: validations.validateTO,
    ac: validations.validateAC,
    al: validations.validateAL,
    ap: validations.validateAP,
    am: validations.validateAM,
    ba: validations.validateBA,
    ce: validations.validateCE,
    df: validations.validateDF,
    es: validations.validateES,
    go: validations.validateGO,
    ma: validations.validateMA,
    mt: validations.validateMT,
    ms: validations.validateMS,
    mg: validations.validateMG,
    pa: validations.validatePA,
    pb: validations.validatePB,
    pr: validations.validatePR,
    pe: validations.validatePE,
    pi: validations.validatePI,
    rj: validations.validateRJ,
    rn: validations.validateRN,
    rs: validations.validateRS,
    ro: validations.validateRO,
    rr: validations.validateRR,
    sc: validations.validateSC,
    sp: validations.validateSP,
    se: validations.validateSE,
    to: validations.validateTO,
  };

  const keys = Object.keys(validationFns);

  return (ie: string, uf: keyof typeof validationFns) =>
    typeof uf === 'string' && keys.includes(uf) && validationFns[uf](ie);
})();
