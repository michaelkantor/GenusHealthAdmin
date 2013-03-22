
package com.genushealthdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  GenusHealthDB.Feedbackquestions
 *  03/22/2013 07:16:08
 * 
 */
public class Feedbackquestions {

    private Integer feedbackquestionid;
    private String question;
    private Integer ordernumber;
    private Feedbackquestionset feedbackquestionset;
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

    public Feedbackquestionset getFeedbackquestionset() {
        return feedbackquestionset;
    }

    public void setFeedbackquestionset(Feedbackquestionset feedbackquestionset) {
        this.feedbackquestionset = feedbackquestionset;
    }

    public Set<com.genushealthdb.data.Feedbackresponses> getFeedbackresponsess() {
        return feedbackresponsess;
    }

    public void setFeedbackresponsess(Set<com.genushealthdb.data.Feedbackresponses> feedbackresponsess) {
        this.feedbackresponsess = feedbackresponsess;
    }

}
