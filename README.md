# Custom Component for Notifications <cc-notification-bell/>
A custom component which serves the purpose of displaying a UI control, displayed as bell. The bell has a notification count balloon, displaying the number of active notifications

<h2>The View</h2>
<h3><u>How easy is it to use?</u></h3>
      &lt;cc-notification-bell id="notfctnComp" 
        notfctn-obj="[[notificationObj]]" 
        on-clear-notifications="[[clearAllNotfctns]]" 
        on-clear-single-notification="[[clearSingleNotification]]"&gt;
      &lt;/cc-notification-bell&gt;

<h3>Attributes and their use</h3>
      <ul>
      <li><h4>on-clear-notifications</h4>
      This is an event which is raised/dispatched from the Custom Component. 
      This event, as the name itself says, clears or deletes all notifications in the list
      This event will be caught and handled by suitable method in the View Model</li>
      <li> <h4>notfctn-obj</h4>
      This holds the information that will be passed to the custom component. </li>
      <li><h4>on-clear-single-notification</h4>
      This is an event which is raised/dispatched from the Custom Component. 
      This event, as the name itself says, clears or deletes the selected notification in the list
      This event will be caught and handled by suitable method in the View Model</li>
      </ul>
      
         
<h2>The View Model: Preparing the values for the above attributes</h2>
     
  <ul>
      <li>The notification object, for <i><b>notfctn-obj</b></i>
            <div>this.notificationObj = {"notfctnSignal": this.notfctnSignal}</div>
            <div>
                  The information is passed as a JSON object, with just one property.
                  This property is a signal object, with just one instance. 
                  Just one instance, and its shared between 2 parties. The parent HTML, and the custom component
                  This signal is the only way, 2-way communcation infact, between these 2 parties.
            </div>
      </li>
  </ul>
          
