
package com.genushealthdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  GenusHealthDB.Dispositions
 *  12/16/2012 16:48:47
 * 
 */
public class Dispositions {

    private Integer dispositionId;
    private String name;
    private String text;
    private Date createdAt;
    private Date modifiedAt;
    private String displayName;
    private Set<com.genushealthdb.data.Feedbackquestions> feedbackquestionss = new HashSet<com.genushealthdb.data.Feedbackquestions>();

    public Integer getDispositionId() {
        return dispositionId;
    }

    public void setDispositionId(Integer dispositionId) {
        this.dispositionId = dispositionId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(Date modifiedAt) {
        this.modifiedAt = modifiedAt;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public Set<com.genushealthdb.data.Feedbackquestions> getFeedbackquestionss() {
        return feedbackquestionss;
    }

    public void setFeedbackquestionss(Set<com.genushealthdb.data.Feedbackquestions> feedbackquestionss) {
        this.feedbackquestionss = feedbackquestionss;
    }

}
