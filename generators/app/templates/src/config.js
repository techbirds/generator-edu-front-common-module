/**
 * 模块组装配置文件
 *
 * @version  1.0
 * @author   <%= project_author %> <<%= project_author %>@corp.netease.com>
 */
NEJ.define([
    'pool/cache-base/src/setting',
    './setting.js'
],function (
    s, setting
) {
    // 设置默认
    s.$default(setting);
    // 子系统组装配置
    return {
        rules: {
            rewrite: {

            },
            alias: {

            }
        },
        modules: {

        }
    };
});
