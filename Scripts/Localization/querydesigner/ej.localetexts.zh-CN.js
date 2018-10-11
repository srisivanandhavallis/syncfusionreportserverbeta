ej.QueryDesigner.Locale['zh-CN'] = {
    storeParameter: {
        title: '参数',
        ok: '好',
        cancel: '取消',
        parameterLable: '参数',
        nullLable: '空值',
        valueLable: '值',
        dataTypeLable: '数据类型',
        closeToolTip: '关'
    },
    parameter: {
        title: '参数',
        ok: '好',
        cancel: '取消',
        parameterLable: '参数',
        nullLable: '空值',
        valueLable: '值',
        closeToolTip: '关'
    },
    filter: {
        title: '查询过滤器',
        descriptionLable: '表格过滤器列表',
        add: '加',
        save: '好',
        cancel: '取消',
        nullLable: '空值',
        trueLable: '真正',
        falseLable: '假',
        parameterTooltip: '包含作为参数',
        closeToolTip: '关',
        intOperatorType: {
            equals: '等于',
            doesNotEqual: '不相等',
            greaterThan: '比...更棒',
            greaterThanOrEqual: '大于或等于',
            lessThan: '少于',
            lessThanOrEqual: '小于或等于',
            between: '之间',
            notBetween: '不在'
        },
        stringOpertorType: {
            equals: '等于',
            startsWith: '以。。开始',
            endWith: '以。。结束',
            contains: '包含',
            notContains: '不包含'
        },
        errorMessage: {
            dateValidation: '值是无效的日期格式.',
            commonContent: '过滤器 ',
            booleanValidation: ' 没有任何值可以过滤。请提供过滤器的值.',
            stringValidation: ' 没有适当的值来过滤. '
        }
    },
    previewArea: {
        dataPreview: '数据预览',
        noRecords: '无记录可显示',
        generatePreview: '生成预览',
        executeRecords: '执行以预览记录',
        record: '记录',
        records: '记录',
        retrieved: '检索',
        loadRecord: '装载更多',
        update: '更新'
    },
    schemaArea: {
        search: '搜索',
        rename: '改名',
        aggregation: '聚合',
        dialogHeader: '数据集',
        matchesFound: '找不到匹配项',
        alertMessage: {
            datasourceAlert: '选择一个 数据源 来配置 报告 数据集',
            removeTable: '下面的关联表将随此删除',
            duplicateName: '指定的列名已存在',
            specialCharacter: '列名不应包含特殊字符.',
            switcherAlert: '切换到视觉设计师将放弃对查询进行的手动更改. 无论如何，你是否想要使用视觉设计师?',
            duplicateDatasetName: '指定的名称已存在于 数据集 列表中',
            datasetSpecialCharacter: '名称不应包含空格和特殊字符'
        },
        errorMessage: {
            specifyName: '指定列名称',
            specifyDatasetName: '指定 数据集 名称',
            previewFailed: '数据集 无法预览选定的表',
            specifyQuery: '指定 数据集 查询',
            selectTable: '选择表来保存 数据集',
            queryFailed: '数据集 无法保存所选表的查询',
            tableProcedure: '数据集 无法检索选定的表过程'
        }
    },
    toolBar: {
        datasourceLable: '数据源',
        datasetName: '名称',
        run: '跑',
        join: '加入',
        expression: '表达',
        filter: '过滤',
        code: '码',
        finish: '完',
        cancel: '取消',
        parameter: '参数',
        datasourceWaterMark: '选择一个数据源',
        autoPreview: '自动预览'
    },
    joiner: {
        title: '查询连接器',
        descriptionLable: '表关系列表',
        add: '加',
        save: '好',
        cancel: '取消',
        addField: '添加字段',
        closeToolTip: '关',
        leftFieldWaterMark: '左场',
        rightFieldWaterMark: '右场',
        operatorWaterMark: '操作者',
        joinTypeWaterMark: '加入类型',
        leftTableWaterMark: '左表',
        rightTableWaterMark: '右表',
        joinTypes: {
            inner: '内',
            outer: '左外',
            rightOuter: '正确的外面',
            fullOuter: '完全外面'
        },
        errorMessage: {
            removeField: '每个关系必须有一个现场条件。所以，它不允许删除这个字段',
            noRelationAlert: ' 与其他表格无关',
            selectLeftTable: '选择左表值',
            selectRightTable: '选择正确的表值',
            selectRelation: '选择表格的关系',
            selectLeftColumn: '选择字段行的左列值 #',
            selectRightColumn: '选择字段行的右列值 #',
            selectOperator: '选择字段行的运算符 #',
            relationExists: '表之间已经存在关系'
        }
    },
    credentialDialog: {
        title: '凭据对话框',
        userName: '用户名',
        password: '密码',
        userNameWaterMark: '用户名',
        passwordWaterMark: '密码',
        userNameErrorMessage: '请输入用户名',
        passwordErrorMessage: '请输入密码',
        connect: '连',
        close: '关'
    },
    queryExpression: {
        title: '查询表达式',
        functionLabel: '功能',
        columnLabel: '列设置',
        expressionLabel: '表达',
        nameLabel: '名称',
        descriptionLabel: '描述 ',
        exampleLabelText: '例',
        ok: '保存',
        cancel: '取消',
        add: '加',
        textAreaWaterMark: '查询表达式',
        nameFieldWaterMark: '表达式名称',
        closeToolTip: '关',
        errorMessage: {
            saveAlert: '表达式不被保存。你想保存并继续?',
            bracketSyntax: '打开/关闭支架附近的语法不正确（s）.',
            parseAlert: '报表设计器 无法解析指定的表达式.',
            nameAlert: '姓名字段不能为空',
            emptyAlert: '表达字段不应该是空的',
            duplicateName: '指定的表达式名称已经存在',
            specialCharacter: '表达式名称不应包含特殊字符.',
            referenceError: '列不能在其自己的表达式中引用!',
            invalidSyntax: '打开/关闭括号附近的语法无效.',
            retrieveExpression: '报表设计器 无法检索指定的表达式'
        },
        datasetTitle: '数据集',
        expressions: {
            all: '所有',
            numbers: '数字',
            logical: '合乎逻辑',
            conditional: '条件',
            date: '日期',
            stringType: '串',
            text: '文本',
            miscellenuous: '杂 ',
            abs: '返回给定表达式的绝对值.',
            acos: '返回给定数字表达式的反余弦（也称为反余弦）.',
            asin: '返回给定数字表达式的反正弦（也称为反正弦）.',
            atan: '返回给定数字表达式的反正切（也称为反正切）.',
            cos: '返回以给定表达式的弧度指定的角度的余弦.',
            degree: '以给定数值表达式的弧度指定的角度返回角度度数.',
            exponent: '返回给定表达式的指数值.',
            logrithm: '将给定表达式的对数返回给指定的基数.',
            pi: '返回PI的常量值.',
            power: '将给定表达式（表达式1）的值返回到指定的功率（表达式2）.',
            radians: '返回给定数字表达式中以度数指定的角度的弧度角度.',
            round: '返回一个舍入值.',
            sign: '返回表示给定数字表达式的正数（+1），零（0）或负数（-1）符号的值.',
            sin: '返回以给定表达式的弧度指定的角度的正弦值.',
            squareRoot: '返回给定数字表达式的平方根.',
            tan: '返回给定数字表达式的正切值.',
            ifCondition: '根据对表达式的评估，返回true部分或false部分.',
            ifNull: '如果表达式是numeric / string / date，则返回第一个表达式. 如果第一个表达式为NULL，则返回第二个表达式.',
            isNotNull: '如果numeric / string / date_expression为NULL，则返回表示false的字符串; 否则表示为true.',
            isNull: '如果numeric / string / date_expression为NULL，则返回表示true的字符串; 否则表示false.',
            and: '如果两个表达式都计算为true，则返回true.',
            notOperation: '返回正在评估的表达式的反转逻辑值.',
            orOperation: '如果任何表达式的计算结果为true，则返回true.',
            addDate: '将天数添加到指定的日期.',
            name: '返回表示给定日期表达式的指定日期部分的字符串.',
            part: '返回表示给定日期表达式的指定日期部分的整数值.',
            sub: '返回从指定日期减去的日期.',
            day: '返回表示指定日期的日期部分的数值.',
            daydiff: '返回表示两个指定日期之间差异的数字值.',
            hour: '以整数形式返回给定日期的小时.',
            minute: '返回一个数字值，表示由指定的日期表达式产生的日期的分钟部分.',
            month: '返回表示指定日期表达式的日期的月份部分的数值.',
            now: '返回当前的日期和时间.',
            today: '返回当前日期.',
            year: '返回表示指定日期表达式所产生日期的年份部分的数值.',
            char: '将给定的整数ASCII码转换为一个字符.',
            concat: '返回由两个或更多字符串值连接产生的字符串值.',
            contains: '如果给定的字符串表达式包含指定的字符串表达式，则返回true.',
            endsWith: '如果给定的字符串表达式以指定的子字符串表达式结束，则返回true.',
            left: '返回给定字符串表达式开始处的指定字符数.',
            length: '返回给定表达式的自然对数.',
            lower: '从给定的字符串表达式中返回小写字母转换后的字符串值.',
            leftTrim: '返回从字符串表达式中删除前导空白的字符串值.',
            maximum: '返回给定表达式中的最大值.',
            minimum: '返回给定表达式中的最小值.',
            right: '返回给定字符串表达式末尾的指定字符数.',
            rightTrim: '返回给定字符串中没有右侧尾随空格的字符串.',
            startswith: '如果给定的字符串表达式以指定的子字符串表达式开头，则返回true.',
            subString: '返回从给定字符串表达式的特定索引开始的特定字符串长度.',
            upper: '从给定的字符串表达式中返回大写字母转换后的字符串值.'
        }
    },
    reportParameter: {
        title: '参数',
        descriptionText: '报告参数',
        addText: '加',
        ok: '好',
        cancel: '取消',
        nameWaterMark: '参数名称',
        valueWaterMark: '值',
        closeToolTip: '关'
    }
};
