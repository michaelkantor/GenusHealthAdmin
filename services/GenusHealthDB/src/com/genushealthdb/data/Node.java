
package com.genushealthdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  GenusHealthDB.Node
 *  03/22/2013 07:16:08
 * 
 */
public class Node {

    private Integer nodeId;
    private String answer;
    private String question;
    private Date createdAt;
    private Date updatedAt;
    private Integer parent_id;
    private Set<com.genushealthdb.data.NodeGroup> nodegroups = new HashSet<com.genushealthdb.data.NodeGroup>();
    private Set<com.genushealthdb.data.UserSessions> usersessionss = new HashSet<com.genushealthdb.data.UserSessions>();

    public Integer getNodeId() {
        return nodeId;
    }

    public void setNodeId(Integer nodeId) {
        this.nodeId = nodeId;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
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

    public Integer getParent_id() {
        return parent_id;
    }

    public void setParent_id(Integer parent_id) {
        this.parent_id = parent_id;
    }

    public Set<com.genushealthdb.data.NodeGroup> getNodegroups() {
        return nodegroups;
    }

    public void setNodegroups(Set<com.genushealthdb.data.NodeGroup> nodegroups) {
        this.nodegroups = nodegroups;
    }

    public Set<com.genushealthdb.data.UserSessions> getUsersessionss() {
        return usersessionss;
    }

    public void setUsersessionss(Set<com.genushealthdb.data.UserSessions> usersessionss) {
        this.usersessionss = usersessionss;
    }

}
