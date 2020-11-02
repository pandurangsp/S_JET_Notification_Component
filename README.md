# S_JET_Notification_Component
A custom component which serves the purpose of displaying a UI control, displayed as bell. The bell has a notification count balloon, displaying the number of active notifications

<h2>The View</h2>
<h3><u>How easy is it to use?</u></h3>
      &lt;cc-notification-bell id="notfctnComp" 
        notfctn-obj="[[notificationObj]]" 
        on-clear-notifications="[[clearAllNotfctns]]" 
        on-clear-single-notification="[[clearSingleNotification]]"&gt;
      &lt;/cc-notification-bell&gt;

<h3>Attributes and their use</h3>
    <h4>notfctn-obj</h4>
      This holds the information that will be passed to the custom component. 
      
    <h4>on-clear-notifications</h4>
      This is an event which is raised/dispatched from the Custom Component. 
      This event, as the name itself says, clears or deletes all notifications in the list
      This event will be caught and handled by suitable method in the View Model
      
     <h4>on-clear-single-notification</h4>
      This is an event which is raised/dispatched from the Custom Component. 
      This event, as the name itself says, clears or deletes the selected notification in the list
      This event will be caught and handled by suitable method in the View Model
          
