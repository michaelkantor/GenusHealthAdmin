
package com.genushealthdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  GenusHealthDB.UserSessions
 *  03/22/2013 07:16:08
 * 
 */
public class UserSessions {

    private Integer sessionId;
    private String conditionType;
    private String modelDiagnosis;
    private String patientId;
    private Date createdAt;
    private Date updatedAt;
    private String feedback;
    private String version;
    private Node node;
    private Set<com.genushealthdb.data.Messages> messagess = new HashSet<com.genushealthdb.data.Messages>();

    public Integer getSessionId() {
        return sessionId;
    }

    public void setSessionId(Integer sessionId) {
        this.sessionId = sessionId;
    }

    public String getConditionType() {
        return conditionType;
    }

    public void setConditionType(String conditionType) {
        this.conditionType = conditionType;
    }

    public String getModelDiagnosis() {
        return modelDiagnosis;
    }

    public void setModelDiagnosis(String modelDiagnosis) {
        this.modelDiagnosis = modelDiagnosis;
    }

    public String getPatientId() {
        return patientId;
    }

    public void setPatientId(String patientId) {
        this.patientId = patientId;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public Node getNode() {
        return node;
    }

    public void setNode(Node node) {
        this.node = node;
    }

    public Set<com.genushealthdb.data.Messages> getMessagess() {
        return messagess;
    }

    public void setMessagess(Set<com.genushealthdb.data.Messages> messagess) {
        this.messagess = messagess;
    }

}
