/**
 * <%= component_name %> 模块实现文件
 *
 * @version  1.0
 * @author   <%= project_author %> <<%= project_author %>@corp.netease.com>
 * @module   pool/module-<%= module_name %>/src/<%= component_name %>/module
 */
NEJ.define([
    'base/klass',
    'pool/module-base/src/base',
    'text!./module.htm'
],function(
    k,
    m,
    html,
    exports,
    pro
){
    /**
     * <%= component_name %> 模块
     *
     * @class   module:pool/module-<%= module_name %>/src/<%= component_name %>/module.<%= component_name %>
     * @extends module:pool/module-base/src/base.Module
     *
     * @param {Object} options - 模块构造参数
     */
    var <%= component_name %> = k._$klass();
    pro = <%= component_name %>._$extend(m.Module);

    /**
     * 构建模块，这部分主要完成以下逻辑：
     * 
     * * 构建模块主体DOM树结构
     * * 初始化使用的依赖组件的配置信息（如输入参数、回调事件等）
     * * 一次性添加的事件（即模块隐藏时不回收的事件）
     * * 后续用到的节点缓存（注意如果第三方组件配置信息里已经缓存的节点不需要再额外用变量缓存节点）
     *
     * 在UMI配置时的 config 配置直接做为 _doBuild 的输入参数
     * 
     * ```javascript
     * {
     *      "/m/module": {
     *          "module": "/path/to/module/index.html",
     *          "config": {
     *              "a": "aaaa",
     *              "b": "bbbbbb"
     *          }
     *      }
     * }
     * ```
     * 
     * @protected
     * @method  module:pool/module-<%= module_name %>/src/<%= component_name %>/module.<%= component_name %>#_doBuild
     * @param   {Object} options - 构建参数，模块UMI配置时config输入参数
     * @returns {void}
     */
    pro._doBuild = function (options) {
        this.__super(html, options);
        
        // 模块DOM结构根节点为 this._body
        
        // 通过 _$addEvent 做一次性添加的事件
        // v._$addEvent(
        // 	  node,'click',
        // 	  this._doSomething._$bind(this)
        // );
        
        // TODO something
        
        // EXPORTS_PARENT
        
    };

    /**
     * 显示模块业务逻辑实现，这部分主要完成以下逻辑：
     * 
     * * 组装/分配第三方组件，形成完整的模块结构
     * * 添加模块生命周期内DOM事件（模块隐藏时回收）
     *
     * @protected
     * @method  module:pool/module-<%= module_name %>/src/<%= component_name %>/module.<%= component_name %>#_onShow
     * @param   {Object} options        - 显示参数  
     * @param   {String} options.target - 目标 UMI
     * @param   {String} options.source - 原始 UMI
     * @param   {String} options.href   - 完整地址
     * @param   {Object} options.param  - 模块切入查询参数对象 a=aa&b=bb  -> {a:"aa",b:"bb"}
     * @param   {Array}  options.prest  - REST地址模块之后信息做为参数 如地址 /a/b/c/d 对应的模块为 /a/b 则此参数为 ["c","d"]
     * @returns {void}
     */
    pro._onShow = function (options) {
        this.__super(options);
        
        // 通过 this.__doInitDomEvent 做生命周期内的事件添加
        // this.__doInitDomEvent([
        // 	  node,'click',
        // 	  this._doSomething._$bind(this)
        // ]);
        
        // TODO something
    };

    /**
     * 刷新模块业务逻辑实现，这部分主要完成以下逻辑：
     * 
     * * 根据输入信息加载数据
     * * 需要数据才能构造的第三方组件分配/组装
     *
     * @protected
     * @method  module:pool/module-<%= module_name %>/src/<%= component_name %>/module.<%= component_name %>#_onRefresh
     * @param   {Object} options        - 刷新参数
     * @param   {String} options.target - 目标 UMI
     * @param   {String} options.source - 原始 UMI
     * @param   {String} options.href   - 完整地址
     * @param   {Object} options.param  - 模块切入查询参数对象 a=aa&b=bb  -> {a:"aa",b:"bb"}
     * @param   {Array}  options.prest  - REST地址模块之后信息做为参数 如地址 /a/b/c/d 对应的模块为 /a/b 则此参数为 ["c","d"]
     * @returns {void}
     */
    pro._onRefresh = function (options) {
        this.__super(options);
        
        // TODO something
    };

    /**
     * 隐藏模块业务逻辑实现，这部分主要完成以下逻辑：
     * 
     * * 回收所有分配的NEJ组件（基类已处理）
     * * 回收所有分配的Regular组件（基类已处理）
     * * 回收所有添加的生命周期事件（基类已处理）
     * * 确保onhide之后的组件状态同onshow之前一致
     *
     * @protected
     * @method  module:pool/module-<%= module_name %>/src/<%= component_name %>/module.<%= component_name %>#_onHide
     * @returns {void}
     */
    pro._onHide = function () {
        // TODO something
        
        this.__super();
    };

    /**
     * 构建模块
     *
     * @method module:pool/module-<%= module_name %>/src/<%= component_name %>/module.build
     * @param {Object} options - 模块配置参数
     * @see   {@link module:pool/module-base/src/base.build}
     */
    exports.build  = m.build._$bind(m,<%= component_name %>);
    
    /**
     * 注册模块
     *
     * @method module:pool/module-<%= module_name %>/src/<%= component_name %>/module.regist
     * @param {String} umi - 模块UMI或者别名
     * @see   {@link module:pool/module-base/src/base.regist}
     */
    exports.regist = m.regist._$bind2(m,<%= component_name %>);
    
    // 导出模块
    exports.<%= component_name %> = <%= component_name %>;
});