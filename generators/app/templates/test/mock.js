/**
 * MOCK env for Module Unit Test
 *
 * @author <%= project_author %> <<%= project_author %>@corp.netease.com>
 */
NEJ.define([
    'pool/cache-base/src/setting',
    './util.js',
    'json!./app/setting.json'
],function (
    s, ut,
    setting,
    exports
) {
    s.batch(setting);
    // setup mock env
    exports.setup = function (key, map) {
        // setup common request mock
        // ut.setupMocker({
        //     '/j/org/getTermDraft.json':{
        //         code: 0,
        //         message: 'ok',
        //         result: term
        //     }
        // });

        if (!key||!map){
            return;
        }
        // setup mock case
        var mok = {},
            ret = map[key];
        mok[ret.url||map.url] = ret.response||{
            code: 0,
            message: 'ok',
            result: ret.result
        };
        ut.setupMocker(mok);
    };

});
