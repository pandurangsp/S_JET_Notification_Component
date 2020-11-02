# S_JET_Notification_Component
A custom component which serves the purpose of displaying a UI control, displayed as bell. The bell has a notification count balloon, displaying the number of active notifications

<h3>How easy is it to use?</h3>
<br>
  &lt;cc-notification-bell id="notfctnComp" 
    notfctn-obj="[[notificationObj]]" 
    on-clear-notifications="[[clearAllNotfctns]]" 
    on-clear-single-notification="[[clearSingleNotification]]"&gt;
  &lt;/cc-notification-bell&gt;

<h3>Attributes and their use</h3>
<h4>notificationObj</h4>
This 
