
package com.genushealthdb.data;

import java.util.Date;


/**
 *  GenusHealthDB.Dispositions
 *  03/22/2013 07:16:08
 * 
 */
public class Dispositions {

    private Integer dispositionId;
    private String name;
    private String text;
    private Date createdAt;
    private Date modifiedAt;
    private String displayName;
    private Feedbackquestionset feedbackquestionset;

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

    public Feedbackquestionset getFeedbackquestionset() {
        return feedbackquestionset;
    }

    public void setFeedbackquestionset(Feedbackquestionset feedbackquestionset) {
        this.feedbackquestionset = feedbackquestionset;
    }

}
