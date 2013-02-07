
package com.genushealthdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  GenusHealthDB.Node
 *  02/04/2013 08:54:09
 * 
 */
public class Node {

    private Integer nodeId;
    private Integer parentId;
    private String answer;
    private String question;
    private Date createdAt;
    private Date updatedAt;
    private Set<com.genushealthdb.data.UserSessions> usersessionss = new HashSet<com.genushealthdb.data.UserSessions>();

    public Integer getNodeId() {
        return nodeId;
    }

    public void setNodeId(Integer nodeId) {
        this.nodeId = nodeId;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
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

    public Set<com.genushealthdb.data.UserSessions> getUsersessionss() {
        return usersessionss;
    }

    public void setUsersessionss(Set<com.genushealthdb.data.UserSessions> usersessionss) {
        this.usersessionss = usersessionss;
    }

}
