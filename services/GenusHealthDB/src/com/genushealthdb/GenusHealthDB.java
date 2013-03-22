
package com.genushealthdb;

import java.util.List;
import com.genushealthdb.data.Node;
import com.genushealthdb.data.NodeGroup;
import com.genushealthdb.data.output.GetJsonFilesByConditionTypeRtnType;
import com.genushealthdb.data.output.GetMaxNodeIdRtnType;
import com.genushealthdb.data.output.GetSessionVersionsRtnType;
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
 *  03/22/2013 07:16:13
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

    public List<SynopsisQueryRtnType> synopsisQuery(String version, PagingOptions pagingOptions) {
        return ((List<SynopsisQueryRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.synopsisQueryQueryName), version, pagingOptions));
    }

    public List<GetJsonFilesByConditionTypeRtnType> getJsonFilesByConditionType(String conditionType, PagingOptions pagingOptions) {
        return ((List<GetJsonFilesByConditionTypeRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.getJsonFilesByConditionTypeQueryName), conditionType, pagingOptions));
    }

    public List<GroupByNodeIdRtnType> groupByNodeId(String conditionType, String modelDiagnosis, String version, PagingOptions pagingOptions) {
        return ((List<GroupByNodeIdRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.groupByNodeIdQueryName), conditionType, modelDiagnosis, version, pagingOptions));
    }

    public List<Node> getNodeById(Integer nodeId, PagingOptions pagingOptions) {
        return ((List<Node> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.getNodeByIdQueryName), nodeId, pagingOptions));
    }

    public List<GroupByDiagnosisRtnType> groupByDiagnosis(String conditionType, String version, PagingOptions pagingOptions) {
        return ((List<GroupByDiagnosisRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.groupByDiagnosisQueryName), conditionType, version, pagingOptions));
    }

    public List<GetMaxNodeIdRtnType> getMaxNodeId(PagingOptions pagingOptions) {
        return ((List<GetMaxNodeIdRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.getMaxNodeIdQueryName), pagingOptions));
    }

    public List<GetSessionVersionsRtnType> getSessionVersions(PagingOptions pagingOptions) {
        return ((List<GetSessionVersionsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.getSessionVersionsQueryName), pagingOptions));
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
