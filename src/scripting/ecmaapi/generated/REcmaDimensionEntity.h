// ***** AUTOGENERATED CODE, DO NOT EDIT *****
            // ***** This class is not copyable.
        
        #ifndef RECMADIMENSIONENTITY_H
        #define RECMADIMENSIONENTITY_H

        #include "ecmaapi_global.h"

        #include <QScriptEngine>
        #include <QScriptValue>
        #include <QScriptContextInfo>
        #include <QDebug>

        
                #include "RDimensionEntity.h"
            

        /**
         * \ingroup scripting_ecmaapi
         */
        class QCADECMAAPI_EXPORT REcmaDimensionEntity {

        public:
      static  void init(QScriptEngine& engine, QScriptValue* proto 
    =NULL
    ) 
    ;static  QScriptValue create(QScriptContext* context, QScriptEngine* engine) 
    ;

    // conversion functions for base classes:
    static  QScriptValue getREntity(QScriptContext *context,
            QScriptEngine *engine)
        ;static  QScriptValue getRObject(QScriptContext *context,
            QScriptEngine *engine)
        ;

    // returns class name:
    static  QScriptValue getClassName(QScriptContext *context, QScriptEngine *engine) 
        ;

    // returns all base classes (in case of multiple inheritance):
    static  QScriptValue getBaseClasses(QScriptContext *context, QScriptEngine *engine) 
        ;

    // properties:
    

    // public methods:
    static  QScriptValue
        init
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getType
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setProperty
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getProperty
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        exportEntity
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getData
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        isValid
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setDefinitionPoint
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getDefinitionPoint
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setText
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getText
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getMeasurement
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getTextData
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setTextPosition
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getTextPosition
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setFontName
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getFontName
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        hasCustomTextPosition
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        setCustomTextPosition
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getLineSpacingStyle
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getLineSpacingFactor
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getTextAngle
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue toString
    (QScriptContext *context, QScriptEngine *engine)
    ;static  QScriptValue destroy(QScriptContext *context, QScriptEngine *engine)
    ;static RDimensionEntity* getSelf(const QString& fName, QScriptContext* context)
    ;static RDimensionEntity* getSelfShell(const QString& fName, QScriptContext* context)
    ;};
    #endif
    