
package com.genushealthdb;

import java.util.List;
import com.genushealthdb.data.NodeGroup;
import com.genushealthdb.data.output.GetJsonFilesByConditionTypeRtnType;
import com.genushealthdb.data.output.GetMaxNodeIdRtnType;
import com.genushealthdb.data.output.GroupByConditionTypeQueryRtnType;
import com.genushealthdb.data.output.GroupByDiagnosisRtnType;
import com.genushealthdb.data.output.GroupByNodeIdRtnType;
import com.genushealthdb.data.output.SynopsisQueryRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "GenusHealthDB"
 *  12/16/2012 16:49:12
 * 
 */
@SuppressWarnings("unchecked")
public class GenusHealthDB
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<GroupByConditionTypeQueryRtnType> groupByConditionTypeQuery(PagingOptions pagingOptions) {
        return ((List<GroupByConditionTypeQueryRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.groupByConditionTypeQueryQueryName), pagingOptions));
    }

    public List<SynopsisQueryRtnType> synopsisQuery(PagingOptions pagingOptions) {
        return ((List<SynopsisQueryRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.synopsisQueryQueryName), pagingOptions));
    }

    public List<GetJsonFilesByConditionTypeRtnType> getJsonFilesByConditionType(String conditionType, PagingOptions pagingOptions) {
        return ((List<GetJsonFilesByConditionTypeRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.getJsonFilesByConditionTypeQueryName), conditionType, pagingOptions));
    }

    public List<GroupByNodeIdRtnType> groupByNodeId(String conditionType, String modelDiagnosis, PagingOptions pagingOptions) {
        return ((List<GroupByNodeIdRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.groupByNodeIdQueryName), conditionType, modelDiagnosis, pagingOptions));
    }

    public List<GroupByDiagnosisRtnType> groupByDiagnosis(String conditionType, PagingOptions pagingOptions) {
        return ((List<GroupByDiagnosisRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.groupByDiagnosisQueryName), conditionType, pagingOptions));
    }

    public List<GetMaxNodeIdRtnType> getMaxNodeId(PagingOptions pagingOptions) {
        return ((List<GetMaxNodeIdRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.getMaxNodeIdQueryName), pagingOptions));
    }

    public List<NodeGroup> getConditionList(PagingOptions pagingOptions) {
        return ((List<NodeGroup> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.getConditionListQueryName), pagingOptions));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
