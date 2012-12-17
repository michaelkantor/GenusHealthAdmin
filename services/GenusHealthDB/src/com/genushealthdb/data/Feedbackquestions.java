
package com.genushealthdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  GenusHealthDB.Feedbackquestions
 *  12/16/2012 16:49:07
 * 
 */
public class Feedbackquestions {

    private Integer feedbackquestionid;
    private String question;
    private Integer ordernumber;
    private Dispositions dispositions;
    private Set<com.genushealthdb.data.Feedbackresponses> feedbackresponsess = new HashSet<com.genushealthdb.data.Feedbackresponses>();

    public Integer getFeedbackquestionid() {
        return feedbackquestionid;
    }

    public void setFeedbackquestionid(Integer feedbackquestionid) {
        this.feedbackquestionid = feedbackquestionid;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public Integer getOrdernumber() {
        return ordernumber;
    }

    public void setOrdernumber(Integer ordernumber) {
        this.ordernumber = ordernumber;
    }

    public Dispositions getDispositions() {
        return dispositions;
    }

    public void setDispositions(Dispositions dispositions) {
        this.dispositions = dispositions;
    }

    public Set<com.genushealthdb.data.Feedbackresponses> getFeedbackresponsess() {
        return feedbackresponsess;
    }

    public void setFeedbackresponsess(Set<com.genushealthdb.data.Feedbackresponses> feedbackresponsess) {
        this.feedbackresponsess = feedbackresponsess;
    }

}
